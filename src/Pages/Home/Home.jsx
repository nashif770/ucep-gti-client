import React from "react";
import Banner from "./Banner/Banner";
import CourseOverview from "./CourseOverview/CourseOverview";
import FeaturedCourses from "./FeaturedCourses/FeaturedCourses";
import Testimonial from "./Testimonial/Testimonial";
import Trainers from "./Trainers/Trainers";
import Events from "./Events/Events";
import StudentProjects from "./StudentProjects/StudentProjects";
import Faq from "./FAQ/Faq";
import EnrollmentProcess from "./EnrollmentProcess/EnrollmentProcess";
import CareerPath from "./CareerPath/CareerPath";
import IndustrialPartnerShip from "./IndustrialPartnerShip/IndustrialPartnerShip";
import Certification from "./Certification/Certification";
import ContactUs from "./ContactUs/ContactUs";
import SocialMedia from "./SocialMedia/SocialMedia";

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
      <EnrollmentProcess></EnrollmentProcess>
      <CareerPath></CareerPath>
      <IndustrialPartnerShip></IndustrialPartnerShip>
      <Certification></Certification>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
