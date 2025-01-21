import img1 from "../icons/product-cover-1.png";
import img2 from "../icons/product-cover-2.png";
import img3 from "../icons/product-cover-3.png";
import img4 from "../icons/product-cover-4.png";
import img5 from "../icons/product-cover-5.png";

const ProductCardDesktop = () => {
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
    <div className="flex justify-center items-center space-x-4">
      {products.map((product, index) => (
        <div
          className="flex flex-col w-[183px] items-start relative"
          key={index}
        >
          <div className="flex flex-col w-[183px] items-start relative flex-[0_0_auto] bg-light-background-color">
            <div
              className="relative self-stretch w-full h-[238px] bg-cover bg-[50%_50%]"
              style={{ backgroundImage: `url(${product.image})` }}
            />

            <div className="flex flex-col items-center gap-2.5 pt-[25px] pb-[35px] px-[25px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[131px] mt-[-1.00px] font-h-5 font-[number:var(--h-5-font-weight)] text-text-color text-[length:var(--h-5-font-size)] text-center tracking-[var(--h-5-letter-spacing)] leading-[var(--h-5-line-height)] [font-style:var(--h-5-font-style)]">
                {product.title}
              </div>

              <div className="relative w-fit ml-[-6.50px] mr-[-6.50px] font-link font-[number:var(--link-font-weight)] text-second-text-color text-[length:var(--link-font-size)] text-center tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                {product.department}
              </div>

              <div className="inline-flex items-start gap-[5px] px-[3px] py-[5px] relative flex-[0_0_auto]">
                <div className="relative w-[52px] mt-[-1.00px] font-h-5 font-[number:var(--h-5-font-weight)] text-muted-color text-[length:var(--h-5-font-size)] text-center tracking-[var(--h-5-letter-spacing)] leading-[var(--h-5-line-height)] [font-style:var(--h-5-font-style)]">
                  ${product.oldPrice}
                </div>

                <div className="relative w-[45px] mt-[-1.00px] font-h-5 font-[number:var(--h-5-font-weight)] text-secondary-color-1 text-[length:var(--h-5-font-size)] text-center tracking-[var(--h-5-letter-spacing)] leading-[var(--h-5-line-height)] [font-style:var(--h-5-font-style)]">
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

export default ProductCardDesktop;
