import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 px-6 font-[Montserrat] flex justify-center">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Üst Kısım - Logo ve Sosyal Medya */}
        <div className="flex flex-col md:flex-row justify-between ml-10 md:items-center mb-8">
          <h2 className="text-2xl font-bold text-[#252B42]">Bandage</h2>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-blue-500 text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-blue-500 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-500 text-xl">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Linkler */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-sm text-left ">
          {/* Company Info */}
          <div className="flex flex-col items-start ml-10">
            <h3 className="font-semibold text-[#252B42] mb-2">Company Info</h3>
            <ul className="space-y-1 text-[#737373]">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-start ml-10">
            <h3 className="font-semibold text-[#252B42] mb-2">Legal</h3>
            <ul className="space-y-1 text-[#737373]">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="flex flex-col items-start ml-10">
            <h3 className="font-semibold text-[#252B42] mb-2">Features</h3>
            <ul className="space-y-1 text-[#737373]">
              <li>
                <a href="#">Business Marketing</a>
              </li>
              <li>
                <a href="#">User Analytic</a>
              </li>
              <li>
                <a href="#">Live Chat</a>
              </li>
              <li>
                <a href="#">Unlimited Support</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col items-start ml-10">
            <h3 className="font-semibold text-[#252B42] mb-2">Resources</h3>
            <ul className="space-y-1 text-[#737373]">
              <li>
                <a href="#">IOS & Android</a>
              </li>
              <li>
                <a href="#">Watch a Demo</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="flex flex-col items-center md:items-start w-full">
            <h3 className="font-semibold text-[#252B42] mb-2">Get In Touch</h3>
            <div className="flex bg-gray-200 rounded-md overflow-hidden w-full max-w-[350px]">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 text-sm text-gray-700 bg-transparent outline-none"
              />
              <button className="bg-blue-500 text-white px-4 py-2 text-sm">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1 text-center md:text-left">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>

        {/* Alt Bölüm */}
        <div className="text-center text-gray-600 text-xs mt-8">
          Made With Love By <strong>Finland</strong> All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
