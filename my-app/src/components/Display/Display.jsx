import "./Display.scss";

const Display = (props) => {
  const { city } = props;

  return (
    <div className="weather-card">
      <h1>Weather in {city.location.name}</h1>
      <p>Temperature: {city.current.temp_c} &#8451;</p>
      <p>{city.current.condition.text}</p>
      <img className="Main__icon" src={city.current.condition.icon} />
      <p>{city.location.localtime}</p>
    </div>
  );
};

export default Display;
