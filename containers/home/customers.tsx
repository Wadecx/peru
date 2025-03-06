"use client";

import { useState, useEffect } from "react";
import { Reviews } from "@/data/reviews";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CustomersReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4); // Par défaut : 4 en desktop

  // Détecter la taille de l'écran et ajuster itemsPerPage
  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 4);
    };

    updateItemsPerPage(); // Appliquer immédiatement
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= Reviews.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0
        ? Reviews.length - itemsPerPage
        : prev - itemsPerPage
    );
  };

  return (
    <section className="flex flex-col justify-center text-center bg-primary">
      <h2 className="uppercase font-black md:text-4xl text-2xl my-24">
        DES <span className="text-secondary-light">TÉMOIGNAGES</span> QUI
        PARLENT D’EUX-MÊMES.
      </h2>

      <div className="relative flex justify-center items-center flex-col">
        {/* Conteneur des avis */}
        <div className="w-full max-w-[100rem] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {Reviews.map((client, index) => (
              <div key={index} className={`w-full md:w-1/4 px-4 shrink-0`}>
                <div className="bg-white p-4 md:p-6 rounded-3xl shadow-lg min-h-[350px] md:h-[300px] flex flex-col justify-between mb-4 text-start">
                  <p className="text-2xl mb-2">{client.rate}</p>
                  <p className="mb-4">{client.desc}</p>
                  <h3 className="text-secondary-light text-xl font-black">
                    {client.name}
                  </h3>
                  <h3 className="mb-4">{client.date}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex mr-[20%] gap-5 items-end w-80% mx-auto mb-24 mt-4">
          <button
            onClick={prevSlide}
            className="bg-secondary p-2 rounded-full shadow-md text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-secondary p-2 rounded-full shadow-md text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
