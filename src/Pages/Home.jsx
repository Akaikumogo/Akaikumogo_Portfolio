/* eslint-disable react/no-unescaped-entities */
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="w-full h-full  flex-col flex gap-3 ">
      <h1 className="text-[38px] font-bold">Hi.I'm Sarvarbek Xazratov.</h1>
      <div className="w-full text-[20px] ">
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
      <h1 className="text-[28px]">O'zim haqimda:</h1>
      <p className="w-[80%] text-[24px] ">
        Salom mening ismim Sarvarbek. Dasturlash olamida 2020-yildan buyon
        sayohat qilaman Asosiy yo'nalishim hozircha Front-end ammo Back-end ni
        o'rganish niyatim ham bor va harakatdaman. Front end dasturchisi
        sifatida ReactJs texnologiyasidan foydalanaman,o'zim mustaqil Python
        dasturlash tilini basic o'rgnganman. 2023-yil 12-mart sanasidan boshlab
        Najot ta'lim o'quv markazida o'qiy boshladim va shu yilning 14-oktyabr
        sanasida o'quv kursini Muvofaqiyatli yakunladim.Undan Tashqari o'z
        ustimda mustaqil ishlab kursdan tashqari ilimlarni o'rganmoqdaman.
      </p>
    </div>
  );
};

export default Home;
