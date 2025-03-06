import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="max-w-[95%] min-h-[600px] mb-4 p-12 bg-secondary-light text-white mx-auto rounded-3xl flex justify-evenly">
      <div className="flex flex-col gap-4 mt-24">
        <h3 className="uppercase text-xl font-black">suivez nos actualités</h3>
        <p className="text-xl">
          Abonnez-vous à notre newsletter pour rester informé<br/> de nos dernières
          actualités.
        </p>

        <input type="text" name="" id="" placeholder="Votre addresse e-mail " className="w-fit pr-[300px] pl-5 py-3 rounded-xl text-black mb-12"/>
        <Image src="/assets/icons/peru-blanc.png" alt="" width={250} height={300} className=""></Image>
        <h3 className="font-bold">2025 - Tout droits réservés</h3>
      </div>
      <div className="flex flex-col mt-24">
        <h3 className="uppercase font-extrabold mb-2 text-xl">sté péru</h3>
        <ul className="flex flex-col">
          <Link href="" className="uppercase">nos services</Link>
          <Link href="" className="uppercase">notre histoire</Link>
          <Link href="" className="uppercase">contactez-nous</Link>
          <Link href="" className="uppercase">mon compte</Link>
        </ul>
      </div>

      <div className="flex flex-col my-24">
        <h3 className="uppercase font-extrabold text-xl">besoin d'aide ?</h3>
        <a href="mailto:societe.peru78@gmail.com">societe.peru78@gmail.com</a>
        <a href="tel:01 34 77 03 01">01 34 77 03 01</a>
        <h3 className="mt-8 font-extrabold">POLITIQUE & CONFIDENTIALITÉ</h3>
      </div>
    </section>
  );
};

export { Footer };
