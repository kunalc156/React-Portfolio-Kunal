import React  from 'react';
import Project from '../components/Project'

const Portfolio = () => {

  const projects = [
    {
      title : "Weather Dashboard",
      urlpath : "weather-img",
      linkpath: "https://kunalc156.github.io/06-weather-dashboard-kunal/",
      gitpath: "https://github.com/kunalc156/06-weather-dashboard-kunal"
    },
    {
      title : "Food Portal",
      urlpath : "food-img",
      linkpath: "https://and1roxx43.github.io/Food-Recipe-Portal/",
      gitpath: "https://github.com/and1roxx43/Food-Recipe-Portal"
    },
    {
      title : "Day Scheduler",
      urlpath : "scheduler-img",
      linkpath: "https://kunalc156.github.io/05-dayplanner-bootcamp-kunal/",
      gitpath: "https://github.com/kunalc156/05-dayplanner-bootcamp-kunal"
    },
    {
      title : "Clever waste",
      urlpath : "waste-img",
      linkpath: "https://clever-waste.herokuapp.com",
      gitpath: "https://github.com/ChrisOnions/Project-2"
    }
  ];
 
  return (
    <section id="portfolio">
      <h3 className="section-heading"> PORTFOLIO </h3>
      <Project projects={projects}/>    
    </section>
  );
};

export default Portfolio;