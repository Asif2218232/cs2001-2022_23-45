import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import axios from 'axios'
import "leaflet/dist/leaflet.css"


function LocationMap() {
  const [location, setLocation] = useState('');
  const [position, setPosition] = useState([51.505, -0.09], 13);

  const [data, setData] = useState({})

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function LocationMarker() {
    const map = useMap();
    map.flyTo(position, map.getZoom());

    return (
      <Marker position={position}>
        <Popup>{location}</Popup>
      </Marker>
    );
  }

  useEffect(() => {
    fetch(`https://nominatim.openstreetmap.org/search?q=${location}&format=json`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          setPosition([parseFloat(lat), parseFloat(lon)]);
        }
      });
  }, [location]);


  return (
    <>
        <div style={{ height: '500px', width: '500px' }}>
        <input placeholder="Enter Location" type="text" onKeyPress={searchLocation} value={location} onChange={handleLocationChange} />
        <MapContainer center={position} zoom={20} style={{ height: '400px', width: '600px' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {position && <LocationMarker />}
        </MapContainer>
        </div>
        <div className="app">
      <div className="search">
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
    </>
    
  );
}

export default LocationMap;










// import React, { useState } from 'react'
// import axios from 'axios'

// function App() {
//   const [data, setData] = useState({})
//   const [location, setLocation] = useState('')

//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

//   const searchLocation = (event) => {
//     if (event.key === 'Enter') {
//       axios.get(url).then((response) => {
//         setData(response.data)
//         console.log(response.data)
//       })
//       setLocation('')
//     }
//   }

//   return (
    
//   );
// }

// export default App;