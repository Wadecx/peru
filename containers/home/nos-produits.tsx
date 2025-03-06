import { products } from "@/data/products";
import Image from "next/image";

export const Nosproduits = () => {
  return (
    <section className="max-w-[90%] mx-auto mt-12">
      <div className="flex flex-col gap-4 ml-12 mb-12">
        <h2 className="uppercase font-medium text-2xl">
          <span className="text-secondary">- </span>nos produits
        </h2>

        <h2 className="uppercase font-black text-4xl mb-4">
          DES COMBUSTIBLES DE <span className="text-secondary">QUALITÉS</span>
          <br /> POUR TOUS VOS BESOINS !
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-2 ml-12 w-full">
        {products.map((carburant, index) => (
          <div
            className="p-4 flex flex-col gap-4 max-h-[515px] shadow-[0px_0px_18px_5px_rgba(0,_0,_0,_0.1)] max-w-[90%] justify-between rounded-3xl"
            key={index}
          >
            <div className="flex gap-2 items-center mt-4">
              <Image src={carburant.icon} width={24} height={24} alt=""></Image>
              <h3 className="text-3xl font-black uppercase">
                {carburant.name}
              </h3>
            </div>
            <p>{carburant.desc}</p>
            <Image
              src={carburant.img}
              alt=""
              width={500}
              height={300}
              className=""
            ></Image>

          </div>
        ))}
      </div>
    </section>
  );
};
