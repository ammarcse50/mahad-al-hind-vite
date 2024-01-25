const Header = () => {
  return (
  
      <div className="w-full md:flex md:justify-between xl:justify-between lg:justify-between sm:text-center text-center">
         <div className="">
               <h2 className="text-blue-500 font-bold">Mahadul Qira'at Al Hind</h2>

         </div>
        <div>
            
            <ul className="md:flex gap-9 ">

                <li><a href="">Home</a></li>
                <li><a href="">Courses</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Login</a></li>
                <li><a href="">Signin</a></li>




            </ul>



        </div>
      </div>
 
  );
};

export default Header;
