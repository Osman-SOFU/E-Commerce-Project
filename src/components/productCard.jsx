import img1 from "../icons/product-cover-1.png";
import img2 from "../icons/product-cover-2.png";
import img3 from "../icons/product-cover-3.png";
import img4 from "../icons/product-cover-4.png";
import img5 from "../icons/product-cover-5.png";

const ProductCard = () => {
  const products = [
    {
      image: img1,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 16.48,
      newPrice: 6.48,
    },
    {
      image: img2,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 16.48,
      newPrice: 6.48,
    },
    {
      image: img3,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 16.48,
      newPrice: 6.48,
    },
    {
      image: img4,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 16.48,
      newPrice: 6.48,
    },
    {
      image: img5,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 16.48,
      newPrice: 6.48,
    },
  ];

  return (
    <div>
      {products.map((product, index) => (
        <div
          className="w-[295px] items-start flex flex-col relative flex-[0_0_auto]"
          key={index}
        >
          <div className="w-[295px] flex flex-col items-start relative flex-[0_0_auto] bg-white">
            <div
              className="relative self-stretch w-full h-[360px] bg-cover bg-[50%_50%]"
              style={{ backgroundImage: `url(${product.image})` }}
            />

            <div className="flex flex-col items-center gap-2.5 pt-[25px] pb-[35px] px-[25px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[131px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#252b42] text-base text-center tracking-[0.10px] leading-6">
                {product.title}
              </div>

              <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-[#727272] text-[length:var(--link-font-size)] text-center tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                {product.department}
              </div>

              <div className="inline-flex items-start gap-[5px] px-[3px] py-[5px] relative flex-[0_0_auto]">
                <div className="w-[52px] mt-[-1.00px] text-muted-color text-center relative [font-family:'Montserrat-Bold',Helvetica] font-bold text-base tracking-[0.10px] leading-6">
                  ${product.oldPrice}
                </div>

                <div className="relative w-[45px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-secondary-color-1 text-base text-center tracking-[0.10px] leading-6">
                  ${product.newPrice}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
