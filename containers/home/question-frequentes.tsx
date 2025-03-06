"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Plus } from "lucide-react";

export const Question = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleParagraph = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="flex justify-center md:relative right-20">
      <div className="flex md:flex-row flex-col md:gap-0 gap-10">
        <div className="p-12 flex flex-col rounded-[50px] shadow-[0px_0px_18px_5px_rgba(0,_0,_0,_0.1)]  text-center items-center gap-4 mx-auto max-h-[444px]">
          <Image
            src="/assets/images/home/info.png"
            alt=""
            width={100}
            height={100}
            className=""
          ></Image>
          <h3 className="font-black text-xl ">
            BESOIN DE PLUS
            <br /> D’INFORMATIONS ?
          </h3>
          <p>
            N'hésitez pas à nous contacter par <br /> mail ou par téléphone,
            nous serons
            <br /> heureux d'échanger avec vous !
          </p>
          <Link
            href=""
            className=" mt-4 uppercase px-8 py-3 font-black bg-secondary text-white rounded-xl"
          >
            contactez-nous
          </Link>
        </div>

        <div className="flex-1 md:pl-24 mb-24 max-w-[90%] mx-auto">
          <h2 className="font-black md:text-4xl text-2xl">
            QUESTIONS FRÉQUENTES SUR
            <br /> <span className="text-secondary-light">NOS SERVICES</span>.
          </h2>
          <span className="w-full h-[0.02rem] block bg-black my-8"></span>
          <h3
            className="text-xl font-black mb-4 flex items-center justify-between cursor-pointer"
            onClick={toggleParagraph}
          >
            Quels combustibles livrez-vous ?
            <Plus
              className={`transition-transform ${
                isOpen ? "rotate-45" : "rotate-0"
              }`}
            />
          </h3>
          <p
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            Nous livrons une large gamme de combustibles, incluant du fioul, des
            pellets
            <br /> de bois, ainsi que des granulés de bois. N'hésitez pas à nous
            contacter pour
            <br /> plus de détails sur les produits disponibles et les options
            de livraison !
          </p>
          <span className="w-full h-[0.02rem] block bg-black my-8"></span>
          <h3
            className="text-xl font-black mb-4 flex items-center justify-between cursor-pointer"
          >
            Puis-je commander de petites quantités ?
            <Plus/>
          </h3>
          <span className="w-full h-[0.02rem] block bg-black my-8"></span>
          <h3
            className="text-xl font-black mb-4 flex items-center justify-between cursor-pointer"
          >
           Livrez-vous dans ma région ?
            <Plus/>
          </h3>
          <span className="w-full h-[0.02rem] block bg-black my-8"></span>

        </div>
      </div>
    </section>
  );
};
