import React from "react";
import Banner from "./Banner/Banner";
import CourseOverview from "./CourseOverview/CourseOverview";
import FeaturedCourses from "./FeaturedCourses/FeaturedCourses";
import Testimonial from "./Testimonial/Testimonial";
import Trainers from "./Trainers/Trainers";
import Events from "./Events/Events";
import StudentProjects from "./StudentProjects/StudentProjects";
import Faq from "./FAQ/Faq";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CourseOverview></CourseOverview>
      <FeaturedCourses></FeaturedCourses>
      <Testimonial></Testimonial>
      <Trainers></Trainers>
      <Events></Events>
      <StudentProjects></StudentProjects>
      <Faq></Faq>
    </div>
  );
};

export default Home;
