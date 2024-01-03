import Image from "../../node_modules/next/image";
import Link from "../../node_modules/next/link";

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "3%",
};

{
  /* <Image
   src="/images/base_img.png"
   width={0}
   height={0}
   sizes='100vw'
   style={{ width: '100%', height: 'auto' }} 
   alt="cars and moto"
   /> */
}

const page2 = () => {
  return (
    <>
      <section>
        <div className="relative">
          <Image
            src="/assets/images/base_img.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="cars and moto"
          />
          <div className="absolute bottom-8 px-6 py-3 w-full">
            <h1 className="text-white font-semibold text-4xl">
              Buy and sell <br /> your vehicle here!{" "}
            </h1>
            <p className="text-gray-200">
              Find the best selection of new and used vehicles
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center h-auto ">
        <form
          action="submit"
          className="flex flex-col justify-items-center sm:flex-row justify-around border-2 rounded-lg mt-4 "
        >
          <input
            type="text"
            placeholder="Cars, Utilitys, Motorcicles"
            className="border-2 text-black rounded-lg m-2 "
          />
          <input
            type="text"
            placeholder="City"
            className="border-2 text-black rounded-lg m-2"
          />
          <input
            type="text"
            placeholder="Brand"
            className="border-2 text-black rounded-lg m-2"
          />
          <input
            type="text"
            placeholder="Model Name"
            className="border-2 text-black rounded-lg m-2"
          />
          <input
            type="text"
            placeholder="From:"
            className="border-2 text-black rounded-lg m-2"
          />
          <button type="submit" className="btn m-2">
            Search
          </button>
        </form>
      </section>
      <section className="flex flex-col sm:grid grid-rows-2 grid-flow-col gap-3 justify-items-center m-6 ">
        <Link href="/">
          <Image
            src="/assets/images/base_img.png"
            width={0}
            height={0}
            sizes="50vw"
            style={imageStyle}
            alt="cars and moto"
          />
        </Link>

        <Link href="/">
          <Image
            src="/assets/images/base_img.png"
            width={0}
            height={0}
            sizes="50vw"
            style={imageStyle}
            alt="cars and moto"
          />
        </Link>

        <Link href="/">
          <Image
            src="/assets/images/base_img.png"
            width={0}
            height={0}
            sizes="50vw"
            style={imageStyle}
            alt="cars and moto"
          />
        </Link>

        <Link href="/">
          <Image
            src="/assets/images/base_img.png"
            width={0}
            height={0}
            sizes="50vw"
            style={imageStyle}
            alt="cars and moto"
          />
        </Link>
      </section>
    </>
  );
};

export default page2;
