const FeatureSection = ({ features }) => (
  <div>
    <h4 className="text-center mb-3">Features</h4>
    {features.flat().map((feature, idx) => (
      <div>
       <p key={idx}>{feature}</p> 
       <hr />
      </div>
      
    ))}
  </div>
);

export default FeatureSection;
