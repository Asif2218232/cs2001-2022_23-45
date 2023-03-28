import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import "./Solutions.css";

const Solutions = () => {
  return (
    <div className="solutions-wrapper">
      <div className="Solutions">
        <h1 className="title">Upcycle Your Waste :-)</h1>
        <div className="content">
          <div className="videos">
            <YoutubeEmbed
              embedId1="Xs_HbZO8lOQ"
              embedId2="4B0zhN7YPVw"
              embedId3="9jI27zb35_A"
              embedId4="NgLpaJ6L6Sg"
            />
          </div>
          <div className="info">
            <h2>What is Upcycling?</h2>
            <p>
              Upcycling is like magic! It's when you turn old or used stuff into something new and fabulous. With upcycling, we give new life to things that might have been thrown away, and help our planet at the same time!
            </p>
            <h2>Why is Upcycling Cool?</h2>
            <p>
              Upcycling is super cool because it helps us save the Earth while being creative. When we upcycle, we use less raw materials, energy, and water. Plus, we make less waste and pollution. So, by upcycling, we become Earth-saving superheroes! 🦸‍♂️🌍🦸‍♀️
            </p>
            <h2>Upcycling Ideas for Kids</h2>
            <ul>
              <li>
                🎨 Turn an old T-shirt into a cool tote bag for carrying books or toys.
              </li>
              <li>
                🌱 Make a mini-garden in an empty plastic bottle or a used tin can.
              </li>
              <li>
                🏰 Build a magical castle or a secret hideout using cardboard boxes.
              </li>
              <li>
                🧸 Create cute and cuddly stuffed animals from old socks or gloves.
              </li>
              <li>
                🖼️ Design unique picture frames from popsicle sticks or old CDs.
              </li>
            </ul>
            <p>
              So, let's get our thinking caps on and start upcycling! Together, we can make the world a cleaner, greener, and more awesome place. Happy upcycling, friends! 😄🌟🌈
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
