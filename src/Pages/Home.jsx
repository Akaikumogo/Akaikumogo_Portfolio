/* eslint-disable react/no-unescaped-entities */
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="w-full h-[91vh] sm:h-[85vh]  sm:flex-col sm:flex sm:gap-3  ">
      <h1 className="text-[24px] sm:text-[38px] sm:font-bold">
        Hi.I'm Sarvarbek Xazratov.
      </h1>
      <div className="sm:w-full text-[16px] mt-[10px] font-bold sm:text-[20px] mb-6 ">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("I'm Front-end Devoloper.")
              .pauseFor(1000)
              .deleteAll()
              .typeString("And you can call me Akaikumogo.")
              .start();
          }}
        />
      </div>
      <h1 className=" text-[20px] sm:text-[36px] sm:mb-0 mb-[10px]">
        About me:
      </h1>
      <p className=" text-[16px] sm:w-[80%] sm:text-[24px] ">
        Hi.I'm Sarvarbek and you can find me on social networks as Akikumogo. I was born in 2005
        and I am currently a Front-end Developer. I use Reactjs technology.
      </p>
    </div>
  );
};

export default Home;
