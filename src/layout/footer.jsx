import colMd6 from "../icons/col-md-6.svg";
import hr from "../icons/hr.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[414px] h-[1342px] bg-light-background-color">
        <div className="absolute w-[414px] h-[173px] top-0 left-0">
          <img
            className="absolute w-[414px] h-px top-[141px] left-0 object-cover"
            alt="Hr"
            src={hr}
          />

          <div className="absolute w-[414px] h-[173px] top-0 left-0 bg-light-gray-1 overflow-hidden">
            <div className="w-[325px] items-start px-0 py-10 left-11 flex flex-col relative">
              <div className="flex-col items-center gap-[11.5px] inline-flex relative flex-[0_0_auto]">
                <div className="w-[236px] gap-2.5 flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="relative w-[187px] h-[58px] overflow-hidden">
                    <div className="absolute top-3 left-0 font-h-3 font-[number:var(--h-3-font-weight)] text-text-color text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] whitespace-nowrap [font-style:var(--h-3-font-style)]">
                      Bandage
                    </div>
                  </div>
                </div>

                <img
                  className="relative w-[243px] flex-[0_0_auto]"
                  alt="Col md"
                  src={colMd6}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-[414px] h-[1071px] top-[173px] left-0 bg-white">
          <div className="w-[321px] items-start px-0 py-[70px] left-[46px] flex flex-col relative">
            <div className="flex-col items-start gap-[30px] inline-flex relative flex-[0_0_auto]">
              <div className="w-[148px] gap-5 flex flex-col items-start relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-h-5 font-[number:var(--h-5-font-weight)] text-text-color text-[length:var(--h-5-font-size)] tracking-[var(--h-5-letter-spacing)] leading-[var(--h-5-line-height)] whitespace-nowrap [font-style:var(--h-5-font-style)]">
                  Company Info
                </div>

                <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                  <div className="mt-[-1.00px] relative w-fit font-link font-[number:var(--link-font-weight)] text-second-text-color text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                    About Us
                  </div>

                  <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-second-text-color text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                    Carrier
                  </div>

                  <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-second-text-color text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                    We are hiring
                  </div>

                  <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-second-text-color text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                    Blog
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[152px] items-start gap-5 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-h-5 font-[number:var(--h-5-font-weight)] text-text-color text-[length:var(--h-5-font-size)] tracking-[var(--h-5-letter-spacing)] leading-[var(--h-5-line-height)] whitespace-nowrap [font-style:var(--h-5-font-style)]">
                  Legal
                </div>

                <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                  <div className="mt-[-1.00px] relative w-fit font-link font-[number:var(--link-font-weight)] text-second-text-color text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                    About Us
                  </div>

                  <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-second-text-color text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                    Carrier
                  </div>

                  <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-second-text-color text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                    We are hiring
                  </div>

                  <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-second-text-color text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                    Blog
                  </div>
                </div>
              </div>

              <div className="w-[148px] gap-5 flex flex-col items-start relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-h-5 font-[number:var(--h-5-font-weight)] text-text-color text-[length:var(--h-5-font-size)] tracking-[var(--h-5-letter-spacing)] leading-[var(--h-5-line-height)] whitespace-nowrap [font-style:var(--h-5-font-style)]">
                  Features
                </div>

                <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                  <div className="mt-[-1.00px] relative w-fit font-link font-[number:var(--link-font-weight)] text-second-text-color text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                    Business Marketing
                  </div>

                  <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-second-text-color text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                    User Analytic
                  </div>

                  <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-second-text-color text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                    Live Chat
                  </div>

                  <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-second-text-color text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                    Unlimited Support
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[152px] items-start gap-5 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-h-5 font-[number:var(--h-5-font-weight)] text-text-color text-[length:var(--h-5-font-size)] tracking-[var(--h-5-letter-spacing)] leading-[var(--h-5-line-height)] whitespace-nowrap [font-style:var(--h-5-font-style)]">
                  Resources
                </div>

                <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                  <div className="mt-[-1.00px] relative w-fit font-link font-[number:var(--link-font-weight)] text-second-text-color text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                    IOS &amp; Android
                  </div>

                  <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-second-text-color text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                    Watch a Demo
                  </div>

                  <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-second-text-color text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                    Customers
                  </div>

                  <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-second-text-color text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                    API
                  </div>
                </div>
              </div>

              <div className="w-[321px] gap-5 flex flex-col items-start relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-h-5 font-[number:var(--h-5-font-weight)] text-text-color text-[length:var(--h-5-font-size)] tracking-[var(--h-5-letter-spacing)] leading-[var(--h-5-line-height)] whitespace-nowrap [font-style:var(--h-5-font-style)]">
                  Get In Touch
                </div>

                <div className="relative w-[321px] h-[87px]">
                  <div className="absolute w-[321px] h-[58px] top-0 left-0">
                    <div className="relative h-[58px] rounded-[5px]">
                      <div className="absolute w-[321px] h-[58px] top-0 left-0 bg-[#f8f8f8] rounded-[5px] overflow-hidden border border-solid border-[#e6e6e6]">
                        <div className="absolute top-3.5 left-5 [font-family:'Montserrat-Regular',Helvetica] font-normal text-second-text-color text-sm tracking-[0.20px] leading-7 whitespace-nowrap">
                          Your Email
                        </div>
                      </div>

                      <button className="all-[unset] box-border absolute w-[117px] h-[58px] top-0 left-[204px]">
                        <button className="all-[unset] box-border relative h-[58px] bg-primary-color rounded-[0px_5px_5px_0px] overflow-hidden border border-solid border-[#e6e6e6]">
                          <div className="absolute top-3.5 left-[22px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-light-text-color text-sm text-center tracking-[0.20px] leading-7 whitespace-nowrap">
                            Subscribe
                          </div>
                        </button>
                      </button>
                    </div>
                  </div>

                  <p className="absolute top-[58px] left-0.5 [font-family:'Montserrat-Regular',Helvetica] font-normal text-second-text-color text-xs tracking-[0.20px] leading-7 whitespace-nowrap">
                    Lore imp sum dolor Amit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-[414px] h-[98px] top-[1244px] left-0 bg-[#f9f9f9]">
          <div className="w-[414px] items-center px-0 py-[25px] flex flex-col relative">
            <div className="items-center gap-[213px] inline-flex relative flex-[0_0_auto]">
              <div className="flex flex-col w-[413px] items-center relative">
                <p className="relative w-fit mt-[-1.00px] font-h-6 font-[number:var(--h-6-font-weight)] text-second-text-color text-[length:var(--h-6-font-size)] text-center tracking-[var(--h-6-letter-spacing)] leading-[var(--h-6-line-height)] [font-style:var(--h-6-font-style)]">
                  Made With Love By <br />
                  Finland All Right Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
