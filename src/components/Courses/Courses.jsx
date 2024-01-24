const Courses = () => {
  return (
    <div>
      <h2 className="text-[40px] mt-20 mb-20 text-primary stroke-blue-500 text-center">
        Courses Available
      </h2>
      <div className="cards-container flex gap-9">
        {/* card-1  */}

        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
            <img
              src="https://i.ibb.co/wYF3kcY/hafs-card-1.png"
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Hafs An Asim
            </h4>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
              Imam Hafs and Imam Asim were prominent scholars in Islamic
              recitation (Qira'at) methods. The Hafs An Asim Qira'at, a widely
              followed recitation, is named after them. It is known for its
              clarity and prevalence in the reading of the Quran across various
              Muslim communities.
            </p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <a href="#https://wa.me/919365262648">
              <button className="text-white bg-green-700"> Contact</button>
            </a>
          </div>
        </div>

        {/* card-2  */}

        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
            <img
              src="https://i.ibb.co/6PL6mhk/saba.png"
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Qira'at E Sab'a
            </h4>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
              Qiraat-e-Sab'a refers to the seven different canonical recitations
              of the Quran, recognized and transmitted through a chain of
              trustworthy narrators. These variations are considered permissible
              and trace back to the Prophet Muhammad's companions.
            </p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <a href="https://wa.me/919365262648">
              {" "}
              <button className="text-white bg-green-700">Contact</button>
            </a>
          </div>
        </div>

        {/* card-3  */}

        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
            <img
              src="https://i.ibb.co/K61MD5v/ashara.png"
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Qira'at E Ashara
            </h4>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
              Qira'at-e-Ashara refers to the ten authorized and distinct ways of
              reciting the Quran, each with its own specific chain of
              transmission. These recitations contribute to the linguistic
              richness and preservation of the Quranic text in Islamic
              tradition.
            </p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <a href="https://wa.me/919365262648">
              {" "}
              <button className="text-white bg-green-700">Contact</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
