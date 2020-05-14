import React from "react";
import Hero from "../components/Hero";
import Content from '../components/Content';

function AboutPage(props) {

  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>Hello, my name is Stephen Renda. I'm a full stack engineer with experience in React, Express JS, NodeJS, SQL, MongoDB, JavaScript/Typescript, Java, C/C++.</p>

        <p>My goal is to learn as much as possible, and once I am ready I plan to start my own business. I am consistently learning new things, currently I am studying C#, Angular, React, and dabbling in game development with Unity.</p>
      
        <p>Currently I am working on Loan software for The Money Brokers business with a team of 6 other undergrads. We have ended our analzsys phase and now are moving into implementation.</p>

      </Content>
    </div>
  );
}

export default AboutPage;
