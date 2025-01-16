import img1 from "../icons/unsplash-lks7vei-eag.png";
import img2 from "../icons/image.png";

const PageContentCard = () => {
  const contents = [
    {
      image: img1,
      image2: img2,
    },
  ];

  return (
    <div>
      {contents.map((content, index) => (
        <div
          className="relative w-[374.21px] h-[363.55px] overflow-hidden"
          key={index}
        >
          <img
            className="absolute w-[158px] h-[364px] top-0 object-cover"
            alt="Unsplash eag"
            src={content.image}
          />

          <img
            className="absolute w-[158px] h-[364px] top-0 left-[170px] object-cover"
            alt="Unsplash eag"
            src={content.image2}
          />
        </div>
      ))}
    </div>
  );
};

export default PageContentCard;
