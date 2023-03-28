import React from "react";
import "./blog.css";

function App() {
  // climate change Influancers
  const influencers = [
    {
      name: "Greta Thunberg",
      image: "greta thunberg.jpg",
      description: "Swedish environmental activist who is known for challenging world leaders to take immediate action against climate change.",
      link: "https://twitter.com/GretaThunberg"
    },
    {
      name: "Bill Gates",
      image: "C:\Users\tusha\Documents\GitHub\cs2001-2022_23-45\public\Influancer-image\Bill gates.jpg",
      description: "Philanthropist and businessman who has focused on clean energy innovation and addressing climate change.",
      link: "https://twitter.com/BillGates"
    },
    {
      name: "Katharine Hayhoe",
      image: "C:\Users\tusha\Documents\GitHub\cs2001-2022_23-45\public\Influancer-image\Katharine Hayhoe.jpg",
      description: "Climate scientist who is known for her work communicating climate change to the public and bridging the gap between science and faith.",
      link: "https://twitter.com/KHayhoe"
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{color: "red"}}>Climate Change Influencers</h1>
      </header>
      <div className="influencers-container">
        {influencers.map((influencer) => (
          <div className="influencer-card">
            <img src={influencer.image} alt={influencer.name} />
            <h2 style={{color: "red"}}>{influencer.name}</h2>
            <p style={{color: "red", textAlign: "center",display: "flex"}}>{influencer.description}</p>
            <a href={influencer.link} target="_blank" rel="noreferrer">
              Follow {influencer.name} on Twitter
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
