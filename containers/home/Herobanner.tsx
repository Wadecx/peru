import { Truck, ThumbsUp, Euro } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Herobanner = () => {
  return (
    <section className="bg-primary flex justify-center md:pt-24 pt-[200px] flex-col text-center max-w-[97%] mx-auto">
      <div className="">
        <h1 className="uppercase md:text-4xl text-2xl font-black">
          votre <span className="text-secondary">partenaire de confiance</span>
          <br /> pour le fioul, le gnr et les pellets.
        </h1>
      </div>

      <div className="uppercase flex gap-4 justify-center mt-4 font-medium md:flex-row flex-col items-center">
        <p className="flex gap-2 text-center">
          {" "}
          <Truck size={24} className="scale-x-[-1]" /> livraison rapide
        </p>
        <p className="flex gap-2 text-center">
          <ThumbsUp size={20} />
          satisfaction garantie
        </p>
        <p className="flex gap-2 text-center">
          <Euro size={20} /> prix compétitifs
        </p>
      </div>

      <div className="flex justify-center mt-8 flex-col">
        <h3 className="font-bold text-xl">⭐⭐⭐⭐⭐ 4.9/5</h3>
        <p className="uppercase">basé sur 120 Avis</p>
      </div>

      <div className="mt-8 mb-24">
        <Link
          href=""
          className="uppercase py-4 px-8 font-bold text-white bg-secondary rounded-xl shadow-lg"
        >
          contactez-nous
        </Link>
      </div>

      <div className="w-full h-[671px] bg-[url('/assets/images/home/hero-banner.png')] bg-cover bg-no-repeat bg-center rounded-bl-3xl rounded-br-3xl"></div>

    </section>
  );
};
