// import React from 'react';
import React, { useRef } from 'react';
import img1 from "../assets/images/headerimg.png";
import img2 from "../assets/images/headerimg3copy.png";
// import img3 from "../assets/images/headerimg4copy.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './home.css';

// const images = [img1, img2, img3];


const Home = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const handleCourseClick = () => {
    if (isLoggedIn) {
      navigate("/courses");
    } else {
      navigate("/login", { state: { from: { pathname: "/courses" } } });
    }
  };

  const courseContainerRef = useRef(null);

  const scrollLeft = () => {
    if (courseContainerRef.current) {
      courseContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (courseContainerRef.current) {
      courseContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  const courses = [
  {
    title: "React Basics",
    description: "Learn the fundamentals of React including components, state, and props.",
    button: <button className="course1">Enroll Now</button>
  },
  {
    title: "Advanced JavaScript",
    description: "Deep dive into closures, async programming, and ES6+ features.",
    button: <button className="course1">Enroll Now</button>
  },
  {
    title: "UI/UX Design",
    description: "Understanding user-centered design and prototyping.",
    button: <button className="course1">Enroll Now</button>
  },
  {
    title: "Full Stack Development",
    description: "Become a full stack developer by mastering both front-end and back-end technologies.",
    button: <button className="course1">Enroll Now</button>
  },
  {
    title: "Data Structures and Algorithms",
    description: "Learn essential data structures and algorithms for efficient coding.",
    button: <button className="course1">Enroll Now</button>
  },
  {
    title: "Machine Learning",
    description: "Introduction to machine learning concepts and algorithms.",
    button: <button className="course1">Enroll Now</button>
  },
  {
    title: "Web Development Bootcamp",
    description: "Comprehensive bootcamp covering front-end and back-end development.",
    button: <button className="course1">Enroll Now</button>
  },
];

  return(
    <div className="home-container">
      <div className="intro">
        <div className="slider">
          <img
            src={img1}
            alt={`slider${current + 1}`}
            className="home-image"
            style={{ top: 0, left: 0 }}
          />
        <div className="intro-content">
          <h1>ICT Skills For Development</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Doloremque soluta blanditiis pariatur quasi nisi odit itaque,
              iste architecto velit vel nihil facere exercitationem.
            Cumque illo quos ullam tempore officiis itaque.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Doloremque soluta blanditiis pariatur quasi nisi odit itaque,
              iste architecto velit vel nihil facere exercitationem.
            Cumque illo quos ullam tempore officiis itaque.
          </p>
        <button className='course' onClick={handleCourseClick}>Find Course</button>
        </div>
        </div>
      </div>
      <h2> Popular Courses</h2>
      <div className="course-scroll-wrapper">
        <button className="arrow-btn left-arrow" onClick={scrollLeft}>&#8592;</button>
      <div className="course-boxes-container" ref={courseContainerRef}>
        {courses.map((course, index) => (
          <div className="course-box" key={index}>
            {course.image && <img src={course.image} alt={course.title} className="course-image" />}
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            {course.duration && <small>Duration: {course.duration}</small>}
            {course.author && <small>Instructor: {course.author}</small>}
            {course.button && course.button}
          </div>
        ))}
      </div>
          <button className="arrow-btn right-arrow" onClick={scrollRight}>&#8594;</button>
      </div>
      <div className="about-us">
        <h2>About Us</h2>
        <div className="about-content">
          <img
          src={img2}
          alt={`slider${current + 1}`}
          className="about-img"
          style={{ top: 0, left: 0 }}
          />
          <p>We are dedicated to providing high-quality education and training in ICT skills.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minus iusto dolor laborum itaque delectus expedita molestias vel rem quam ab nobis, exercitationem provident inventore aperiam, atque modi tempora commodi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minus iusto dolor laborum itaque delectus expedita molestias vel rem quam ab nobis, exercitationem provident inventore aperiam, atque modi tempora commodi.<br />
            <button className="course" onClick={() => navigate("/about")}> Learn More</button>
          </p>
        </div>
      </div>
      <div className="team">
        <h2>Our Team</h2>
        <div className="team-members">
        <div className="team-member">
          <img src="assets/images/copy.png" alt="Member 1" className="team-member-img" />
          <div className="team-member-details">
            <h3>LINUS, DAVID PRINCE</h3>
            <p>Frontend Developer</p>
            <p>Passionate about creating interactive and user-friendly web applications.</p>
          </div>
        </div>
        <div className="team-member">
          <img src="assets/images/copy.png" alt="Member 2" className="team-member-img" />
        <div className="team-member-details">
          <h3>JOSHUA GODWIN JOSHUA</h3>
          <p>Backend Developer</p>
          <p>Experienced in building robust server-side applications.</p>
        </div>
      </div>
    </div>
      </div>
    </div>
    )
};

export default Home;