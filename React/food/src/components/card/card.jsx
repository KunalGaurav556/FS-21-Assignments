import style from "./card.module.css";
// import style from "./card.module.css";

const Card = (props) => {
//   console.log(props);
  return (
    <>
      <div className={style.main}>
        <div>
          <h2
            style={{
              color: "green",
            }}
          >
            {props.data.name}
          </h2>
          <br />
          <span>Rating : 
            {[...Array(5)].map((item, index) => {
              return (
                <i
                  key={index}
                  className={`fa-${
                    parseInt(props.data.rating) >= index + 1
                      ? "solid"
                      : "regular"
                  } fa-star`}
                ></i>
              );
            })}

            <i className="fa-regular fa-star"></i>
          </span>
          <br />
          <br />
          <span>
            <i className="fa-sharp fa-solid fa-location-dot"></i>
            {props.data.address}
          </span> <br />
          <span>{props.data.outcode}</span>
          <span>{props.data.postcode}</span>
        </div>
        <div>
          <h2>{props.data.type_of_food}</h2>
          <a href="">Visit Menu</a>
        </div>
      </div>
    </>
  );
};
export default Card;
