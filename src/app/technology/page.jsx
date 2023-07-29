"use client"
import Navbar from "@/components/Navbar"
import { useState } from "react";
import Image from "next/image";
import data from "../../data.json";


function Technology() {
  const { technology } = data;
  const [selectedTechnology, setSelectedTechnology] = useState("Launch vehicle");
  const basePath = "/assets/technology";


  const handleClick = (name) => {
    if (name === 1) {
      setSelectedTechnology("Launch vehicle");
    }
    if (name === 2) {
      setSelectedTechnology("Spaceport");
    }
    if (name === 3) {
      setSelectedTechnology("Space capsule");
    }
  }
  return (
    <section>
      <Navbar />
      <main>
          <h1>03 SPACE LAUNCH 101</h1>
        <section className="all-page">
          <section className="technology-btn">
          <button onClick={() => handleClick(1)}>1</button>
          <button onClick={() => handleClick(2)}>2</button>
          <button onClick={() => handleClick(3)}>3</button>
          </section>
          <section>
          {technology.filter((technology) => ( technology.name === selectedTechnology)).map((technology) => (
            <div key={technology.name} className="tech-planet" >
              <div className="card-tech">
              <p>THE TERMINOLOGY...</p>
              <h2>{technology.name}</h2>
              <p>{technology.description}</p>
              </div>
              <Image src={`${basePath}/${technology.images.portrait}`} alt={technology.name} width={515} height={527} />
            </div>
          ))}
          </section>
        </section>
      </main>
    </section>
  )
}

export default Technology