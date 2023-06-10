import React, {useState} from "react";
function Weathercontainer() {
  const [city, setCity] = useState("")
  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    setCity(value);
  };
const handleSearch = () => {
  //run weather search 
  console.log(city);

};
  return (
    <div className="weather-container">
      <div className="weather-search">
        <input
          type="text"
          placeholder="City"
          name = "city"
          onChange={handleInputChange}
          value = {city}
        />
        <button onClick={handleSearch}>Get Weather</button>
      </div>
    </div>
  )

}

export default Weathercontainer
