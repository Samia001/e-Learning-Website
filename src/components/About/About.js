import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./About.css";

const About = () => {
  return (
    <div>
      <Header />
      <div className="container about-container">
        <div className="about-img">
          <img
            src="https://media.istockphoto.com/vectors/about-us-flat-design-style-colorful-illustration-vector-id1086341762?b=1&k=20&m=1086341762&s=612x612&w=0&h=3OByMn0qpfFrjhOUcLKmXv7Cnll87FDHWy6SoIN_QBo="
            alt="about-us-img"
          />
        </div>
        <div>
          <h1>About us</h1>
          <p>
            To get started, let’s establish an eLearning definition. So, what is
            eLearning? eLearning, or electronic learning, is the delivery of
            learning and training through digital resources. Although eLearning
            is based on formalized learning, it is provided through electronic
            devices such as computers, tablets and even cellular phones that are
            <br />
            <br />
            connected to the internet. This makes it easy for users to learn
            anytime, anywhere, with few, if any, restrictions. Basically,
            eLearning is training, learning, or education delivered online
            through a computer or any other digital device.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
