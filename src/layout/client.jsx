import colMd3 from "../icons/col-md-3.svg";
import colmd31 from "../icons/col-md3-1.svg";
import colMd32 from "../icons/col-md3-2.svg";
import colMd33 from "../icons/col-md3-3.svg";
import colMd34 from "../icons/col-md3-4.svg";
import colMd35 from "../icons/col-md3-5.svg";

const Client = () => {
  const handleClick = () => {
    alert("Resme tıkladınız!");
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto py-10 px-4 sm:px-6 lg:px-8 mt-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-10 w-full max-w-[1200px] items-center justify-center">
        <img
          className="mx-auto h-12"
          alt="Logo 1"
          src={colMd3}
          onClick={handleClick}
        />
        <img
          className="mx-auto h-12"
          alt="Logo 2"
          src={colmd31}
          onClick={handleClick}
        />
        <img
          className="mx-auto h-12"
          alt="Logo 3"
          src={colMd32}
          onClick={handleClick}
        />
        <img
          className="mx-auto h-12"
          alt="Logo 4"
          src={colMd33}
          onClick={handleClick}
        />
        <img
          className="mx-auto h-12"
          alt="Logo 5"
          src={colMd34}
          onClick={handleClick}
        />
        <img
          className="mx-auto h-12"
          alt="Logo 6"
          src={colMd35}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Client;
