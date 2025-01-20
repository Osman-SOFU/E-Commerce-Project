import colMd3 from "../icons/col-md-3.svg";
import colmd31 from "../icons/col-md3-1.svg";
import colMd32 from "../icons/col-md3-2.svg";
import colMd33 from "../icons/col-md3-3.svg";
import colMd34 from "../icons/col-md3-4.svg";
import colMd35 from "../icons/col-md3-5.svg";

const ClientDesktop = () => {
  const handleClick = () => {
    alert("Resme tıkladınız!");
  };

  return (
    <div className="flex justify-center items-center space-x-8 py-8">
      <img src={colMd3} alt="Logo 1" className="h-12" onClick={handleClick} />
      <img src={colmd31} alt="Logo 2" className="h-12" onClick={handleClick} />
      <img src={colMd32} alt="Logo 3" className="h-12" onClick={handleClick} />
      <img src={colMd33} alt="Logo 4" className="h-12" onClick={handleClick} />
      <img src={colMd34} alt="Logo 5" className="h-12" onClick={handleClick} />
      <img src={colMd35} alt="Logo 6" className="h-12" onClick={handleClick} />
    </div>
  );
};

export default ClientDesktop;
