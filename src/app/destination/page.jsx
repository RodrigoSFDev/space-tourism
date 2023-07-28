"use client"
import Navbar from "@/components/Navbar"
import { useState } from "react";
import Image from "next/image";
import data from "../../data.json";


function Destination() {
  const { destinations } = data;
  const [selectedDestination, setSelectedDestination] = useState("Moon");
  const basePath = "/assets/destination";
const filteredDestinations = selectedDestination
? destinations.filter((destination) => destination.name === selectedDestination)
: [];

  const handleClick = (name) => {
    setSelectedDestination(name);
  };
  return (
    <section className="destination">
      <Navbar />
      <main>
        <h1>01 PICK YOUR DESTINATION</h1>
        <div className="dest-name">
          {destinations.map((destination) => (
            <h3 key={destination.name} className={selectedDestination === destination.name ? "select-name selected" : "select-name"} onClick={() => handleClick(destination.name)}>
              {destination.name}
            </h3>
          ))}
        </div>
        <section>
          {filteredDestinations.map((destination) => (
            <div key={destination.name} className="dest-planet" onClick={() => handleClick(destination.name)}>
              <Image src={`${basePath}/${destination.images.png}`} alt={destination.name} width={445} height={445} />
              <div className="dest-info">
              <h2>{destination.name}</h2>
              <p>{destination.description}</p>
              <p>{ destination.distance }</p>
              <p>{ destination.travel }</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </section>
  )
}

export default Destination