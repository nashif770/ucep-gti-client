import React from "react";
import Banner from "./Banner/Banner";
import CourseOverview from "./CourseOverview/CourseOverview";
import FeaturedCourses from "./FeaturedCourses/FeaturedCourses";
import Testimonial from "./Testimonial/Testimonial";
import Trainers from "./Trainers/Trainers";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CourseOverview></CourseOverview>
      <FeaturedCourses></FeaturedCourses>
      <Testimonial></Testimonial>
      <Trainers></Trainers>
    </div>
  );
};

export default Home;
