import Image from "next/image";
import { Link } from "next-view-transitions";

export const SocietePeru = () => {
  return (
    <>
      <section className=" z-[999] bg-primary mb-24 ">
        <div className="flex items-center md:flex-row">
          <div className="md:w-1/2">
            <Image
              src="/assets/images/home/femme_bois.png"
              width="0"
              height="0"
              className="w-full max-h-[650px] object-contain pl-24"
              alt="Image d'une femme qui travaille avec du pellets"
            ></Image>
          </div>

          <div className="flex-1 flex flex-col gap-10 text-start text-lg relative">
            <p className="">
              Depuis plusieurs générations, la Société Péru Matériaux <br/>accompagne
              particuliers, professionnels et agriculteurs avec <br/> des <span className="font-extrabold">solutions
              fiables et adaptées.</span>
            </p>
            <p className="">
              Spécialisés dans <span className="font-extrabold">la vente et la livraison de fioul,</span> nous avons<br/>
              bâti notre entreprise sur la qualité de nos produits et un<br/> service
              client irréprochable.
            </p>
            <p className="md:w-[70%] w-[80%]">
              <span className="font-extrabold">Péru, c’est bien plus qu’un fournisseur :</span> c’est un partenaire<br/> de
              confiance, à vos côtés au quotidien !
            </p>

            <Link
              href="/"
              className="flex items-center uppercase justify-center font-black bg-secondary text-white h-10 rounded-xl mb-12 px-10 py-6 w-fit text-base hover:shadow-xl transition duration-300"
            >
              {" "}
              EN SAVOIR PLUS
            </Link>
          </div>
        </div>
<div className="flex justify-end">
        <Image src="/assets/images/home/flamme.png" alt="" width={250} height={150} className=""></Image>
</div>
      </section>
    </>
  );
};
