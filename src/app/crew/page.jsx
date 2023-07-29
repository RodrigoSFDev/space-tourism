import Navbar from "@/components/Navbar";
import Image from "next/image";
import data from "../../data.json";

function Crew() {
  const { crew } = data;
  const basePath = "/assets/crew";

  return (
    <section className="crew-main">
      <Navbar />
      <main className="crew">
          <h1>02 MEET YOUR CREW</h1>
          <div className="crew-name">
            {crew.map((crew) => (
              <div key={crew.name} className="crew-info">
                <section className="card-crew">
                <h3>{crew.role}</h3>
                <h2>{crew.name}</h2>
                <p>{crew.bio}</p>
                </section>
                <Image
                  src={`${basePath}/${crew.images.png}`}
                  alt={crew.name}
                  width={453.44}
                  height={654}
                />
              </div>
            ))}
          </div>
      </main>
    </section>
  );
}

export default Crew;
