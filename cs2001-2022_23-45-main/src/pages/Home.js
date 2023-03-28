import React from "react";
import './Home.css';

function Home() {
  return (

        <div>
          <h1 style={{ color: 'black', textAlign: 'center', fontSize: 40 }}>Climate Change</h1>

          <video className='VideoBg' autoPlay loop src='1vid-1.mp4' type='video/mp4'  />

          <p style={{ textAlign: 'right',  fontSize: 25, paddingLeft: '800px'  }}>We're on a mission to combat climate change by promoting sustainable practices, renewable energy solutions, and climate-friendly lifestyles. Join us to create a brighter and more sustainable future for everyone.</p>

          
        </div> 
     
  )
}

export default Home;

