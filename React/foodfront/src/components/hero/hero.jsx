import "./hero.modular.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 style={{
            color: "black",
            margin: "0",
            padding: "0px 2rem",
            fontWeight: "bold",
        }}>Let us find your</h1>
        <h1 style={{
            color: "#ff004b",
            margin: "0",
            padding: " 0px 2rem",
            fontWeight: "bold"
        }}>Forever Food.</h1>
        <p style={{
            fontSize: "1.25rem",
            color: "black",
        }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Nesciunt illo tenetur fuga ducimus numquam ea!</p>
        <div className="hero-buttons">
          <button className="btn-primary">Search Now</button>
          <button className="btn-secondary">Know more</button>
        </div>
      </div>
    </div>
  );
};
export default Hero;