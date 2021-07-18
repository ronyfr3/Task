import React from "react";
import { RiVoiceprintFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./LogoPosition.css";

const LogoPosition = () => {
  const positions = [
    {
      title: "Left Breast",
      img: "https://www.workwearexpress.com/media/customisations/z8jyp2BIvo30d03eEpF8Yss2GbztfIqN.jpg",
    },
    {
      title: "Right Breast",
      img: "https://www.workwearexpress.com/media/customisations/3LwfOJtOyUFnmoIXr3gIjienLDFsze4H.jpg",
    },
    {
      title: "Big Front",
      img: "https://www.workwearexpress.com/media/customisations/5LNvsnA3ZNqtnQiuwZ1gpN9ofWeeR20K.jpg",
    },
    {
      title: "Big Back",
      img: "https://www.workwearexpress.com/media/customisations/Nqz7yQC7j4OWWpKxqMemwNSL1KFRNutf.jpg",
    },
    {
      title: "Nape of Neck",
      img: "https://www.workwearexpress.com/media/customisations/Es6ffS4aQpFMI2uwOBXuWwKBoQyHDK2c.jpg",
    },
    {
      title: "Center of Chest",
      img: "https://www.workwearexpress.com/media/customisations/QcxpobP4l5gVHoMXwY0wIOTj1zXit5EE.jpg",
    },
  ];
  return (
    <div className="content-wrapper">
      <h2>Add Customisation</h2>
      <h3>1. Choose positions(s)</h3>
      <div className="logo-positions">
        {positions.map((i) => {
          const { title, img } = i;
          return (
            <div key={title} className="main-wrapper">
              <img src={img} alt={title} />
              <p>{title}</p>
              <main>(applied to all)</main>
              <small>Applications options</small>
              <span>
                <RiVoiceprintFill /> Print
              </span>
              <input type="checkbox" value={title} />
            </div>
          );
        })}
        <Link to="/customisation/method" className="continue-btn">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default LogoPosition;
