import "./Display.scss";

const Display = (props) => {
  const { city } = props;

  return (
    <div className="weather-card">
      <h1>Weather in {city.location.name}</h1>
      <p>Temperature: {city.current.temp_c} &#8451;</p>
      <p>{city.current.condition.text}</p>
    </div>
  );
};
// return (
//   <div>
//     <div className="weather-card">{cityCard}</div>
//   </div>
// );
// };

export default Display;
