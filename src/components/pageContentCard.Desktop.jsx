import img1 from "../icons/unsplash-lks7vei-eag.png";
import img2 from "../icons/image.png";

const PageContentCardDesktop = () => {
  const contents = [
    {
      image: img1,
      image2: img2,
    },
  ];

  return (
    <div>
      {contents.map((content, index) => (
        <div className="relative w-[512.6px] h-[498px]" key={index}>
          <img
            className="absolute w-[217px] h-[498px] top-0 left-0 object-cover"
            alt="Unsplash eag"
            src={content.image}
          />

          <img
            className="absolute w-[280px] h-[498px] top-0 left-[233px] object-cover"
            alt="Unsplash eag"
            src={content.image2}
          />
        </div>
      ))}
    </div>
  );
};

export default PageContentCardDesktop;
