import { Carousel } from "@material-tailwind/react";
const Header = () => {
  return (
    <>
      <div className="text-center lg:h-20  sm:flex sm:justify-between sm:items-center bg-gray-900 text-white">
        <h2 className="ml-4 text-blue-500 font-bold">Mahadul Qira'at Al Hind</h2>

        <div className="mr-4">
          <ul className=" sm:flex gap-9">
            <li className="transition-colors hover:text-blue-500 focus:text-blue-500">
              <a href="Home">Home</a>
            </li>
            <li className="transition-colors hover:text-blue-500 focus:text-blue-500">
              <a href="">Courses</a>
            </li>
            <li className="transition-colors hover:text-blue-500 focus:text-blue-500">
              <a href="">Contact</a>
            </li>
            <li className="transition-colors hover:text-blue-500 focus:text-blue-500">
              <a href="">Login</a>
            </li>
            <li className="transition-colors hover:text-blue-500 focus:text-blue-500 ">
              <a href="">Sign in</a>
            </li>
          </ul>
        </div>
      </div>

      {/* carousel  */}
      <Carousel className="rounded-xl">
        <img
          src="https://i.ibb.co/PYgwYNh/LOCKNOW-INDIA-2.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://i.ibb.co/PYgwYNh/LOCKNOW-INDIA-2.png"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://i.ibb.co/PYgwYNh/LOCKNOW-INDIA-2.png"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </>
  );
};

export default Header;
