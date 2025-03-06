"use client";

import Image from "next/image";
import Link from "next/link";
import { CircleUser, ShoppingBasket, Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import de Framer Motion

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
<section className="flex justify-between bg-primary items-center mx-auto p-8 md:max-w-[97%] w-full md:rounded-tl-3xl md:rounded-tr-3xl md:relative md:mt-4 fixed top-0 left-0 w-full z-50 md:w-auto md:top-auto md:left-auto">
      <div className="md:flex gap-5 hidden">
        
        <Link href="" className="uppercase text-xl">
          nos services
        </Link>
        <Link href="/history" className="uppercase text-xl">
          notre histoire
        </Link>
      </div>
      <div className="relative right-17">
        <Image
          src="/assets/icons/peru.png"
          alt="Image représentant le logo de Site Peru"
          width={0}
          height={0}
          className="w-[150px] md:w-[250px]"
        ></Image>
      </div>
      <div className="md:flex gap-2 hidden">
        <Link href="/contact" className="uppercase underline mx-12 font-medium">
          contactez-nous
        </Link>
        <Link href="">
          <CircleUser />
        </Link>
        <Link href="">
          <ShoppingBasket />
        </Link>
      </div>

      <div className="items-center flex md:hidden">
        <button onClick={toggleMenu}>
          <Menu size={30} />
        </button>
      </div>

      {/* version tel menu */}
      {isOpen && (
        <div className="fixed top-10 mt-12 left-0 w-full shadow-md p-6 z-50 bg-primary">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/services" className="text-lg font-medium text-gray-800 hover:text-secondary">
              Nos services
            </Link>
            <Link href="/histoire" className="text-lg font-medium text-gray-800 hover:text-secondary">
              Notre histoire
            </Link>
            <Link href="/contact" className="text-lg font-medium text-gray-800 hover:text-secondary">
              Contactez-nous
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export { Header };
