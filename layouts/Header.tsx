import Image from "next/image";
import Link
 from "next/link";
 import { CircleUser, ShoppingBasket, ChevronDown } from 'lucide-react';



const Header = () => {
  return (
    <section className="flex justify-between bg-primary mt-4 items-center mx-auto p-8 max-w-[97%] rounded-tl-3xl rounded-tr-3xl">
      <div className="flex gap-5">
        <a href="" className="uppercase text-xl">nos services</a>
        <Link href="/history" className="uppercase text-xl">notre histoire</Link>
      </div>
      <div className="relative right-17">
        <Image src="/assets/icons/peru.png" alt="Image représentant le logo de Site Peru" width={250} height={0} className=""></Image>
      </div>
      <div className="flex gap-2">
      <Link href="/contact" className="uppercase underline mx-12 font-medium">contactez-nous</Link>
      <Link href=""><CircleUser/></Link>
      <Link href=""><ShoppingBasket/></Link>
      </div>
    </section>
  );
};

export { Header };
