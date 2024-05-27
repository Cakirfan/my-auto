import {
  faCar,
  faCalendarAlt,
  faCog,
  faTachometerAlt,
  faBolt,
  faClock,
  faGasPump,
  faDoorOpen,
  faGolfBallTee,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

const cards = [
  {
    img: "https://cdn.pixabay.com/photo/2018/06/21/22/51/mercedes-3489627_640.jpg",
    marke: "Mercedes",
    model: "Mercedes-Benz A",
    details: [
      { icon: faCalendarAlt, label1: "Erstzulassung", label2: "Oktober 2022" },
      { icon: faTachometerAlt, label1: "Kilometerstand", label2: "35,000 km" },
      { icon: faCar, label1: "Zustand", label2: "Unb. Fahrzeug" },
      { icon: faGasPump, label1: "Kraftstoffart", label2: "Diesel" },
      { icon: faClock, label1: "Getriebe", label2: "Automatik" },
      { icon: faCog, label1: "Fahrzeugtyp", label2: "Sedan" },
      { icon: faBolt, label1: "Leistung", label2: "117 kW (130 PS)" },
      { icon: faDoorOpen, label1: "Anzahl Türen", label2: "4/5" },
      { icon: faGolfBallTee, label1: "Umweltplakette", label2: "4(Grün)" },
      { icon: faPalette, label1: "Außenfarbe", label2: "Weiß" },
    ],
    equipment: [
      "Einparkhilfe",
      "Klimaanlage",
      "Radio/Tunner",
      "Tempomat",
      "Xenon/LED-Scheinwerfer",
      "Navigationssystem",
      "Bluetooth",
      "Antiblockiersystem(ABS)",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
    ],
    features: [
      ["Feature 1", "Feature 5"],
      ["Feature 2", "Feature 6"],
      ["Feature 3", "Feature 7"],
      ["Feature 4", "Feature 8"],
    ],
    images: [
      "https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703_640.png",
      "https://cdn.pixabay.com/photo/2016/09/11/16/47/car-1661767_640.jpg",
      "https://cdn.pixabay.com/photo/2019/08/08/23/33/car-4393990_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/10/01/vw-bulli-1868890_640.jpg",
      "https://cdn.pixabay.com/photo/2016/01/18/14/02/old-car-1146597_640.png",
      "https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_640.jpg",
      "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_640.jpg",
      "https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703_640.png",
      "https://cdn.pixabay.com/photo/2016/09/11/16/47/car-1661767_640.jpg",
      "https://cdn.pixabay.com/photo/2019/08/08/23/33/car-4393990_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/10/01/vw-bulli-1868890_640.jpg",
      "https://cdn.pixabay.com/photo/2016/01/18/14/02/old-car-1146597_640.png",
      "https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_640.jpg",
      "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_640.jpg",
      "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_640.jpg",
      "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_640.jpg",
      "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_640.jpg",
      "https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703_640.png",
      "https://cdn.pixabay.com/photo/2016/09/11/16/47/car-1661767_640.jpg",
      "https://cdn.pixabay.com/photo/2019/08/08/23/33/car-4393990_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/10/01/vw-bulli-1868890_640.jpg",
      "https://cdn.pixabay.com/photo/2016/01/18/14/02/old-car-1146597_640.png",
      "https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_640.jpg",
      "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_640.jpg",
      "https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703_640.png",
      "https://cdn.pixabay.com/photo/2016/09/11/16/47/car-1661767_640.jpg",
      "https://cdn.pixabay.com/photo/2019/08/08/23/33/car-4393990_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/10/01/vw-bulli-1868890_640.jpg",
      "https://cdn.pixabay.com/photo/2016/01/18/14/02/old-car-1146597_640.png",
      "https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_640.jpg",
      "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_640.jpg",
      "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_640.jpg",
      "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_640.jpg",
      "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_640.jpg",
    ],
  },
  {
    img: "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_640.jpg",
    marke: "Ford",
    model: "Ford Mustang",
    details: [
      { icon: faCalendarAlt, label1: "Erstzulassung", label2: "Mai 2021" },
      { icon: faTachometerAlt, label1: "Kilometerstand", label2: "20,000 km" },
      { icon: faCar, label1: "Zustand", label2: "Unb. Fahrzeug" },
      { icon: faGasPump, label1: "Kraftstoffart", label2: "Benzin" },
      { icon: faClock, label1: "Getriebe", label2: "Schaltgetriebe" },
      { icon: faCog, label1: "Fahrzeugtyp", label2: "Sedan" },
      { icon: faBolt, label1: "Leistung", label2: "331 kW (450 PS)" },
    ],
    equipment: [
      "Einparkhilfe",
      "Klimaanlage",
      "Radio/Tunner",
      "Tempomat",
      "Xenon/LED-Scheinwerfer",
      "Navigationssystem",
      "Bluetooth",
      "Antiblockiersystem(ABS)",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
    ],
    features: [
      ["Feature 1", "Feature 5"],
      ["Feature 2", "Feature 6"],
      ["Feature 3", "Feature 7"],
      ["Feature 4", "Feature 8"],
    ],
    images: [
      "https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703_640.png",
      "https://cdn.pixabay.com/photo/2016/09/11/16/47/car-1661767_640.jpg",
      "https://cdn.pixabay.com/photo/2019/08/08/23/33/car-4393990_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/10/01/vw-bulli-1868890_640.jpg",
      "https://cdn.pixabay.com/photo/2016/01/18/14/02/old-car-1146597_640.png",
    ],
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/08/02/14/51/audi-1563570_1280.jpg",
    marke: "Audi",
    model: "Audi Q7",
    details: [
      { icon: faCalendarAlt, label1: "Erstzulassung", label2: "Januar 2020" },
      { icon: faTachometerAlt, label1: "Kilometerstand", label2: "20,000 km" },
      { icon: faCar, label1: "Zustand", label2: "Unb. Fahrzeug" },
      { icon: faGasPump, label1: "Kraftstoffart", label2: "Diesel" },
      { icon: faClock, label1: "Getriebe", label2: "Automatik" },
      { icon: faCog, label1: "Fahrzeugtyp", label2: "Sedan" },
      { icon: faBolt, label1: "Leistung", label2: "45,000 km" },
    ],
    equipment: [
      "Einparkhilfe",
      "Klimaanlage",
      "Radio/Tunner",
      "Tempomat",
      "Xenon/LED-Scheinwerfer",
      "Navigationssystem",
      "Bluetooth",
      "Antiblockiersystem(ABS)",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
    ],
    features: [
      ["Feature 1", "Feature 5"],
      ["Feature 2", "Feature 6"],
      ["Feature 3", "Feature 7"],
      ["Feature 4", "Feature 8"],
    ],
    images: [
      "https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703_640.png",
      "https://cdn.pixabay.com/photo/2016/09/11/16/47/car-1661767_640.jpg",
      "https://cdn.pixabay.com/photo/2019/08/08/23/33/car-4393990_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/10/01/vw-bulli-1868890_640.jpg",
      "https://cdn.pixabay.com/photo/2016/01/18/14/02/old-car-1146597_640.png",
    ],
  },
  {
    img: "https://cdn.pixabay.com/photo/2022/07/08/22/46/bmw-x5-7309969_640.jpg",
    marke: "BMW",
    model: "BMW X5",
    details: [
      { icon: faCalendarAlt, label1: "Erstzulassung", label2: "März 2021" },
      { icon: faTachometerAlt, label1: "Kilometerstand", label2: "30,000 km" },
      { icon: faCar, label1: "Zustand", label2: "Unb. Fahrzeug" },
      { icon: faGasPump, label1: "Kraftstoffart", label2: "Hybrid" },
      { icon: faClock, label1: "Getriebe", label2: "Automatik" },
      { icon: faCog, label1: "Fahrzeugtyp", label2: "Sedan" },
      { icon: faBolt, label1: "Leistung", label2: "290 kW (394 PS)" },
    ],
    equipment: [
      "Einparkhilfe",
      "Klimaanlage",
      "Radio/Tunner",
      "Tempomat",
      "Xenon/LED-Scheinwerfer",
      "Navigationssystem",
      "Bluetooth",
      "Antiblockiersystem(ABS)",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
    ],
    features: [
      ["Feature 1", "Feature 5"],
      ["Feature 2", "Feature 6"],
      ["Feature 3", "Feature 7"],
      ["Feature 4", "Feature 8"],
    ],
    images: [
      "https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703_640.png",
      "https://cdn.pixabay.com/photo/2016/09/11/16/47/car-1661767_640.jpg",
      "https://cdn.pixabay.com/photo/2019/08/08/23/33/car-4393990_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/10/01/vw-bulli-1868890_640.jpg",
      "https://cdn.pixabay.com/photo/2016/01/18/14/02/old-car-1146597_640.png",
    ],
  },
  {
    img: "https://cdn.pixabay.com/photo/2018/04/22/17/24/porsche-911-3341711_640.jpg",
    marke: "Porsche",
    model: "Porsche 911",
    details: [
      { icon: faCalendarAlt, label1: "Erstzulassung", label2: "August 2019" },
      { icon: faTachometerAlt, label1: "Kilometerstand", label2: "25,000 km" },
      { icon: faCar, label1: "Zustand", label2: "Unb. Fahrzeug" },
      { icon: faGasPump, label1: "Kraftstoffart", label2: "Benzin" },
      { icon: faClock, label1: "Getriebe", label2: "Automatik" },
      { icon: faCog, label1: "Fahrzeugtyp", label2: "Sedan" },
      { icon: faBolt, label1: "Leistung", label2: "331 kW (450 PS)" },
    ],
    equipment: [
      "Einparkhilfe",
      "Klimaanlage",
      "Radio/Tunner",
      "Tempomat",
      "Xenon/LED-Scheinwerfer",
      "Navigationssystem",
      "Bluetooth",
      "Antiblockiersystem(ABS)",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
    ],
    features: [
      ["Feature 1", "Feature 5"],
      ["Feature 2", "Feature 6"],
      ["Feature 3", "Feature 7"],
      ["Feature 4", "Feature 8"],
    ],
    images: [
      "https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703_640.png",
      "https://cdn.pixabay.com/photo/2016/09/11/16/47/car-1661767_640.jpg",
      "https://cdn.pixabay.com/photo/2019/08/08/23/33/car-4393990_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/10/01/vw-bulli-1868890_640.jpg",
      "https://cdn.pixabay.com/photo/2016/01/18/14/02/old-car-1146597_640.png",
    ],
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/08/02/15/18/lexus-1563694_640.jpg",
    marke: "Lexus",
    model: "Lexus RX",
    details: [
      { icon: faCalendarAlt, label1: "Erstzulassung", label2: "Juli 2021" },
      { icon: faTachometerAlt, label1: "Kilometerstand", label2: "28,000 km" },
      { icon: faCar, label1: "Zustand", label2: "Unb. Fahrzeug" },
      { icon: faGasPump, label1: "Kraftstoffart", label2: "Hybrid" },
      { icon: faClock, label1: "Getriebe", label2: "Automatik" },
      { icon: faCog, label1: "Fahrzeugtyp", label2: "Sedan" },
      { icon: faBolt, label1: "Leistung", label2: "230 kW (313 PS)" },
    ],
    equipment: [
      "Einparkhilfe",
      "Klimaanlage",
      "Radio/Tunner",
      "Tempomat",
      "Xenon/LED-Scheinwerfer",
      "Navigationssystem",
      "Bluetooth",
      "Antiblockiersystem(ABS)",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
    ],
    features: [
      ["Feature 1", "Feature 5"],
      ["Feature 2", "Feature 6"],
      ["Feature 3", "Feature 7"],
      ["Feature 4", "Feature 8"],
    ],
    images: [
      "https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703_640.png",
      "https://cdn.pixabay.com/photo/2016/09/11/16/47/car-1661767_640.jpg",
      "https://cdn.pixabay.com/photo/2019/08/08/23/33/car-4393990_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/10/01/vw-bulli-1868890_640.jpg",
      "https://cdn.pixabay.com/photo/2016/01/18/14/02/old-car-1146597_640.png",
    ],
  },
  {
    img: "https://cdn.pixabay.com/photo/2021/12/23/09/18/tesla-6889042_640.jpg",
    marke: "Tesla",
    model: "Tesla Model S",
    details: [
      { icon: faCalendarAlt, label1: "Erstzulassung", label2: "Dezember 2021" },
      { icon: faTachometerAlt, label1: "Kilometerstand", label2: "15,000 km" },
      { icon: faCar, label1: "Zustand", label2: "Unb. Fahrzeug" },
      { icon: faGasPump, label1: "Kraftstoffart", label2: "Elektrisch" },
      { icon: faClock, label1: "Getriebe", label2: "Automatik" },
      { icon: faCog, label1: "Fahrzeugtyp", label2: "Sedan" },
      { icon: faBolt, label1: "Leistung", label2: "568 kW (778 PS)" },
    ],
    equipment: [
      "Einparkhilfe",
      "Klimaanlage",
      "Radio/Tunner",
      "Tempomat",
      "Xenon/LED-Scheinwerfer",
      "Navigationssystem",
      "Bluetooth",
      "Antiblockiersystem(ABS)",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
    ],
    features: [
      ["Feature 1", "Feature 5"],
      ["Feature 2", "Feature 6"],
      ["Feature 3", "Feature 7"],
      ["Feature 4", "Feature 8"],
    ],
    images: [
      "https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703_640.png",
      "https://cdn.pixabay.com/photo/2016/09/11/16/47/car-1661767_640.jpg",
      "https://cdn.pixabay.com/photo/2019/08/08/23/33/car-4393990_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/10/01/vw-bulli-1868890_640.jpg",
      "https://cdn.pixabay.com/photo/2016/01/18/14/02/old-car-1146597_640.png",
    ],
  },
  {
    img: "https://cdn.pixabay.com/photo/2018/10/07/21/56/volvo-3731469_640.jpg",
    marke: "Volvo",
    model: "Volvo XC90",
    details: [
      { icon: faCalendarAlt, label1: "Erstzulassung", label2: "Februar 2021" },
      { icon: faTachometerAlt, label1: "Kilometerstand", label2: "32,000 km" },
      { icon: faCar, label1: "Zustand", label2: "Unb. Fahrzeug" },
      { icon: faGasPump, label1: "Kraftstoffart", label2: "Diesel" },
      { icon: faClock, label1: "Getriebe", label2: "Automatik" },
      { icon: faCog, label1: "Fahrzeugtyp", label2: "Sedan" },
      { icon: faBolt, label1: "Leistung", label2: "173 kW (235 PS)" },
    ],
    equipment: [
      "Einparkhilfe",
      "Klimaanlage",
      "Radio/Tunner",
      "Tempomat",
      "Xenon/LED-Scheinwerfer",
      "Navigationssystem",
      "Bluetooth",
      "Antiblockiersystem(ABS)",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
    ],
    features: [
      ["Feature 1", "Feature 5"],
      ["Feature 2", "Feature 6"],
      ["Feature 3", "Feature 7"],
      ["Feature 4", "Feature 8"],
    ],
    images: [
      "https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703_640.png",
      "https://cdn.pixabay.com/photo/2016/09/11/16/47/car-1661767_640.jpg",
      "https://cdn.pixabay.com/photo/2019/08/08/23/33/car-4393990_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/10/01/vw-bulli-1868890_640.jpg",
      "https://cdn.pixabay.com/photo/2016/01/18/14/02/old-car-1146597_640.png",
    ],
  },
  {
    img: "https://cdn.pixabay.com/photo/2015/12/28/23/35/auto-1112183_1280.jpg",
    marke: "Chevrolet",
    model: "Chevrolet Camaro",
    details: [
      { icon: faCalendarAlt, label1: "Erstzulassung", label2: "April 2021" },
      { icon: faTachometerAlt, label1: "Kilometerstand", label2: "22,000 km" },
      { icon: faCar, label1: "Zustand", label2: "Unb. Fahrzeug" },
      { icon: faGasPump, label1: "Kraftstoffart", label2: "Benzin" },
      { icon: faClock, label1: "Getriebe", label2: "Schaltgetriebe" },
      { icon: faCog, label1: "Fahrzeugtyp", label2: "Sedan" },
      { icon: faBolt, label1: "Leistung", label2: "339 kW (461 PS)" },
    ],
    equipment: [
      "Einparkhilfe",
      "Klimaanlage",
      "Radio/Tunner",
      "Tempomat",
      "Xenon/LED-Scheinwerfer",
      "Navigationssystem",
      "Bluetooth",
      "Antiblockiersystem(ABS)",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
    ],
    features: [
      ["Feature 1", "Feature 5"],
      ["Feature 2", "Feature 6"],
      ["Feature 3", "Feature 7"],
      ["Feature 4", "Feature 8"],
    ],
    images: [
      "https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703_640.png",
      "https://cdn.pixabay.com/photo/2016/09/11/16/47/car-1661767_640.jpg",
      "https://cdn.pixabay.com/photo/2019/08/08/23/33/car-4393990_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/10/01/vw-bulli-1868890_640.jpg",
      "https://cdn.pixabay.com/photo/2016/01/18/14/02/old-car-1146597_640.png",
    ],
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/11/12/16/32/toyota-land-cruiser-2943058_640.jpg",
    marke: "Toyota",
    model: "Toyota Land Cruiser",
    details: [
      { icon: faCalendarAlt, label1: "Erstzulassung", label2: "November 2020" },
      { icon: faTachometerAlt, label1: "Kilometerstand", label2: "40,000 km" },
      { icon: faCar, label1: "Zustand", label2: "Unb. Fahrzeug" },
      { icon: faGasPump, label1: "Kraftstoffart", label2: "Diesel" },
      { icon: faClock, label1: "Getriebe", label2: "Automatik" },
      { icon: faCog, label1: "Fahrzeugtyp", label2: "Sedan" },
      { icon: faBolt, label1: "Leistung", label2: "150 kW (204 PS)" },
    ],
    equipment: [
      "Einparkhilfe",
      "Klimaanlage",
      "Radio/Tunner",
      "Tempomat",
      "Xenon/LED-Scheinwerfer",
      "Navigationssystem",
      "Bluetooth",
      "Antiblockiersystem(ABS)",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
    ],
    features: [
      ["Feature 1", "Feature 5"],
      ["Feature 2", "Feature 6"],
      ["Feature 3", "Feature 7"],
      ["Feature 4", "Feature 8"],
    ],
    images: [
      "https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703_640.png",
      "https://cdn.pixabay.com/photo/2016/09/11/16/47/car-1661767_640.jpg",
      "https://cdn.pixabay.com/photo/2019/08/08/23/33/car-4393990_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/10/01/vw-bulli-1868890_640.jpg",
      "https://cdn.pixabay.com/photo/2016/01/18/14/02/old-car-1146597_640.png",
    ],
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/11/19/17/14/automobile-1840414_640.jpg",
    marke: "Mazda",
    model: "Mazda CX-5",
    details: [
      { icon: faCalendarAlt, label1: "Erstzulassung", label2: "Juni 2021" },
      { icon: faTachometerAlt, label1: "Kilometerstand", label2: "18,000 km" },
      { icon: faCar, label1: "Zustand", label2: "Unb. Fahrzeug" },
      { icon: faGasPump, label1: "Kraftstoffart", label2: "Benzin" },
      { icon: faClock, label1: "Getriebe", label2: "Automatik" },
      { icon: faCog, label1: "Fahrzeugtyp", label2: "Sedan" },
      { icon: faBolt, label1: "Leistung", label2: "143 kW (194 PS)" },
    ],
    equipment: [
      "Einparkhilfe",
      "Klimaanlage",
      "Radio/Tunner",
      "Tempomat",
      "Xenon/LED-Scheinwerfer",
      "Navigationssystem",
      "Bluetooth",
      "Antiblockiersystem(ABS)",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
    ],
    features: [
      ["Feature 1", "Feature 5"],
      ["Feature 2", "Feature 6"],
      ["Feature 3", "Feature 7"],
      ["Feature 4", "Feature 8"],
    ],
    images: [
      "https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703_640.png",
      "https://cdn.pixabay.com/photo/2016/09/11/16/47/car-1661767_640.jpg",
      "https://cdn.pixabay.com/photo/2019/08/08/23/33/car-4393990_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/10/01/vw-bulli-1868890_640.jpg",
      "https://cdn.pixabay.com/photo/2016/01/18/14/02/old-car-1146597_640.png",
    ],
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/11/24/20/39/nissan-gtr-2975651_640.jpg",
    marke: "Nissan",
    model: "Nissan Qashqai",
    details: [
      {
        icon: faCalendarAlt,
        label1: "Erstzulassung",
        label2: "September 2021",
      },
      { icon: faTachometerAlt, label1: "Kilometerstand", label2: "26,000 km" },
      { icon: faCar, label1: "Zustand", label2: "Unb. Fahrzeug" },
      { icon: faGasPump, label1: "Kraftstoffart", label2: "Hybrid" },
      { icon: faClock, label1: "Getriebe", label2: "Automatik" },
      { icon: faCog, label1: "Fahrzeugtyp", label2: "Sedan" },
      { icon: faBolt, label1: "Leistung", label2: "120 kW (163 PS)" },
    ],
    equipment: [
      "Einparkhilfe",
      "Klimaanlage",
      "Radio/Tunner",
      "Tempomat",
      "Xenon/LED-Scheinwerfer",
      "Navigationssystem",
      "Bluetooth",
      "Antiblockiersystem(ABS)",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
      "Nächste Ausstattung",
    ],
    features: [
      ["Feature 1", "Feature 5"],
      ["Feature 2", "Feature 6"],
      ["Feature 3", "Feature 7"],
      ["Feature 4", "Feature 8"],
    ],
    images: [
      "https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703_640.png",
      "https://cdn.pixabay.com/photo/2016/09/11/16/47/car-1661767_640.jpg",
      "https://cdn.pixabay.com/photo/2019/08/08/23/33/car-4393990_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/10/01/vw-bulli-1868890_640.jpg",
      "https://cdn.pixabay.com/photo/2016/01/18/14/02/old-car-1146597_640.png",
    ],
  },
];

export default cards;
