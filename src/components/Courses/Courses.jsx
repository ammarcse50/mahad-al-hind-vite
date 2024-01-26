import React, { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("Courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
       <> <h2 className="mt-6 font-bold text-4xl text-center">OUR COURSES</h2>  
        
      <div className="card_container mt-20 p-5 text-center md:grid md:grid-cols-2 md:gap-6 md:m-2  lg:grid-cols-4  space-x-6">  
           
        
             


      {courses.map(course => 

          <Course course={course}></Course>
      
        )}
        
        
        </div>
    

        </>
   
  );
};

Courses.propTypes = {


};

export default Courses;
