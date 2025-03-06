import Image from "next/image";

export const Partenaire = () => {
  return (
    <section className="flex flex-col justify-center mt-24 text-center mb-24">
      <h2 className="md:text-4xl text-2xl font-black">
        POURQUOI NOUS SOMMES LE PARTENAIRE
        <br /> DE COMBUSTIBLE{" "}
        <span className="text-secondary">IDÉAL POUR VOUS</span> ?
      </h2>

      <div className="flex justify-evenly mt-12 items-center md:flex-row flex-col gap-5">
        <div className="flex flex-col gap-4 items-center">
          <Image
            src="/assets/images/partenaire-section/livraison.png"
            alt=""
            width={150}
            height={150}
          ></Image>
          <p>Livraison rapide et garantie</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Image
            src="/assets/images/partenaire-section/solution.png"
            alt=""
            width={150}
            height={150}
          ></Image>
          <p>
            Solutions flexibles pour
            <br /> particuliers et professionnels
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Image
            src="/assets/images/partenaire-section/service.png"
            alt=""
            width={150}
            height={150}
          ></Image>
          <p>Service client à l’écoute 7j/7</p>
        </div>
      </div>
    </section>
  );
};
