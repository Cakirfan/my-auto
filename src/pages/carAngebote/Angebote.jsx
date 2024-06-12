import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";
import { cars } from "../../helper/data";
import CarListing from "./core/CarListing";
import CarFilter from "./core/CarFilter";

const Angebote = () => {
  const [filters, setFilters] = useState({
    marke: "",
    model: "",
    kilometerstand: { min: "", max: "" },
    erstzulassung: { min: "", max: "" },
    preis: { min: "", max: "" },
  });


  const renderTooltip = (props, text) => <Tooltip {...props}>{text}</Tooltip>;


  console.log("cars:", cars);
  
  const filteredCars = cars.filter((car) => {
    console.log("carsdetails:", car.details);
    const isMarkeMatch =
      filters.marke === "" || car.marke.includes(filters.marke);
    const isModellMatch =
      filters.model === "" || car.model.includes(filters.model);
    const isKilometerstandMatch =
      (filters.kilometerstand.min === "" ||
        car.kilometerstand >= filters.kilometerstand.min) &&
      (filters.kilometerstand.max === "" ||
        car.kilometerstand <= filters.kilometerstand.max);
    const isErstzulassungMatch =
      (filters.erstzulassung.min === "" ||
        car.erstzulassung >= filters.erstzulassung.min) &&
      (filters.erstzulassung.max === "" ||
        car.erstzulassung <= filters.erstzulassung.max);
    const isPreisMatch =
      (filters.preis.min === "" || car.preis >= filters.preis.min) &&
      (filters.preis.max === "" || car.preis <= filters.preis.max);

    return (
      isMarkeMatch &&
      isModellMatch &&
      isKilometerstandMatch &&
      isErstzulassungMatch &&
      isPreisMatch
    );
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const [filterType, rangeType] = name.split("_");

    if (rangeType) {
      setFilters({
        ...filters,
        [filterType]: {
          ...filters[filterType],
          [rangeType]: value,
        },
      });
    } else {
      setFilters({ ...filters, [name]: value });
      if (name === "marke") {
        // Reset model when marke changes
        setFilters((prev) => ({ ...prev, model: "" }));
      }
    }
  };

  // Fetch models based on selected marque
  const getModelsForMarke = (marke) => {
    if (!marke) return [];
    const models = cars
      .filter((car) => car.marke === marke)
      .flatMap((car) => car.model);
    return [...new Set(models)];
  };

  // Populate model dropdown based on selected marque
  const modelOptions = filters.marke ? getModelsForMarke(filters.marke) : [];

  return (
    <div className="bg-danger-subtle py-5">
      <h2 className="text-center">Aktuelle Fahrzeugangebote</h2>
      <hr className="text-center w-25 mx-auto mb-4" />
      <div className="container">
        <Row>
          <CarFilter
            filters={filters}
            handleFilterChange={handleFilterChange}
            modelOptions={modelOptions}
          />

          <CarListing
            filteredCars={filteredCars}
            renderTooltip={renderTooltip}
          />
        </Row>
      </div>
    </div>
  );
};

export default Angebote;
