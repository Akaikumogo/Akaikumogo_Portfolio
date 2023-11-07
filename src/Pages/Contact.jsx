const Contact = () => {
  return (
    <div className=" w-full h-[90vh]  sm:w-full sm:h-full flex flex-col items-center justify-center gap-[50px]">
      <div className="repo  text-[24px] hover:w-[60%] hover:py-[20px] transition-all duration-500 ease-in-out w-[50%]  py-[10px] text-center">
        <a href="https://github.com/akaikumogo">Github : Akaikumogo</a>
      </div>
      <div className="repo  text-[24px] hover:w-[60%] hover:py-[20px] transition-all duration-500 ease-in-out w-[50%]  py-[10px] text-center">
        <a href="https://t.me/Akaikumogoo">Telegram : Akaikumogo</a>
      </div>
      <div className="repo  text-[24px] hover:w-[60%] hover:py-[20px] transition-all duration-500 ease-in-out w-[50%]  py-[10px] text-center">
        <a href="to-mail:akaikumogo@gmail.com">E-mail : Akaikumogo</a>
      </div>
    </div>
  );
};

export default Contact;
