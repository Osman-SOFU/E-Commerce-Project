import container from "../icons/container.svg";

const Client = () => {
  return (
    <div className="relative w-[414px] h-[1173px] bg-light-background-color">
      <img
        className="absolute w-[414px] h-[952px] top-[110px] left-0"
        alt="Container"
        src={container}
      />
    </div>
  );
};

export default Client;
