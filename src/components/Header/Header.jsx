
import { Carousel } from "@material-tailwind/react";

const Header = () => {
  return (
    <>
      <nav className="block w-full max-w-screen-xl px-4 py-2 mx-auto text-white bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div className="container flex items-center justify-between mx-auto text-indigo-900">
          <a
            href="#"
            className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased text-[20px] text-indigo-900"
          >
            Mahadul Qira'at Al Hind
          </a>
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 ">
                <a
                  href="#Home"
                  className="flex items-center text-blue-900 text-[15px]"
                >
                  Home
                </a>
              </li>
              <li className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                <a
                  href="#"
                  className="flex items-center text-blue-900 text-[15px]"
                >
                  Reach Us
                </a>
              </li>
              <li className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                <a
                  href="#"
                  className="flex items-center text-blue-900 text-[15px]"
                >
                  Payment Method
                </a>
              </li>
              <li className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                <a href="#" className="flex items-center"></a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-x-1">
            <button
              className="hidden px-4 py-2 font-sans text-xs font-bold text-center text-blue-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
              type="button"
            >
              <span>Log In</span>
            </button>
            <button
              className="hidden select-none rounded-lg bg-gradient-to-tr text-blue-900 text-blue-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
              type="button"
            >
              <span>Sign in</span>
            </button>
          </div>
          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </nav>

      {/* Carosel  */}

      <Carousel classNameName="rounded-xl carousel">
        <img
          src="https://i.ibb.co/PYgwYNh/LOCKNOW-INDIA-2.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://i.ibb.co/PYgwYNh/LOCKNOW-INDIA-2.png"
          alt="image 2"
          className="h-full w-full object-cover img2"
        />
        <img
          src="https://i.ibb.co/PYgwYNh/LOCKNOW-INDIA-2.png"
          alt="image 3"
          className="h-full w-full object-cover img3"
        />
      </Carousel>
    </>
  );
};

export default Header;
