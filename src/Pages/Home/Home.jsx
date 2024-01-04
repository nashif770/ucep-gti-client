import React from "react";
import Banner from "./Banner/Banner";
import CourseOverview from "./CourseOverview/CourseOverview";
import FeaturedCourses from "./FeaturedCourses/FeaturedCourses";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CourseOverview></CourseOverview>
      <FeaturedCourses></FeaturedCourses>
    </div>
  );
};

export default Home;
