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
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-[414px] items-start relative">
        <div className="flex flex-col w-[414px] items-center mt-10 gap-[60px] px-0 py-[50px] relative flex-[0_0_auto]">
          <img
            className="relative flex-[0_0_auto]"
            alt="Col md"
            src={colMd3}
            onClick={handleClick}
          />

          <img
            className="relative flex-[0_0_auto]"
            alt="Col md"
            src={colmd31}
            onClick={handleClick}
          />

          <img
            className="relative flex-[0_0_auto]"
            alt="Col md"
            src={colMd32}
            onClick={handleClick}
          />

          <img
            className="relative flex-[0_0_auto]"
            alt="Col md"
            src={colMd33}
            onClick={handleClick}
          />

          <img
            className="relative flex-[0_0_auto]"
            alt="Col md"
            src={colMd34}
            onClick={handleClick}
          />

          <img
            className="relative flex-[0_0_auto]"
            alt="Col md"
            src={colMd35}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Client;
