import React from "react";
import { Container } from "reactstrap";
import workData from "../../assets/json/workExp.json";
import achievementData from "../../assets/json/achievementExp.json";
import projectData from "../../assets/json/projectExp.json";

import classes from "./Project.module.css";
import Author from "./author/author";

const Project = (props) => {
  const currentLocation = props.location;
  const currentPath = currentLocation.pathname;
  const pathToList = currentPath.split("/");

  const basePath = pathToList[1];
  const contentId = pathToList[2];

  let dataContents;

  switch (basePath) {
    case "work":
      dataContents = workData;
      break;
    case "achievement":
      dataContents = achievementData;
      break;
    case "project":
      dataContents = projectData;
      break;
    default:
      this.props.history.push("/404");
      break;
  }

  const [filteredDataContent] = dataContents.filter((elem) => elem.id === contentId);
  console.log(filteredDataContent);
  const content = filteredDataContent.content;
  const author = filteredDataContent.author;
  console.log(author);

  return (
    <div>
      <div style={{ marginTop: 47.5 }}></div>
      <Container>
        <div className={classes.Header} style={{ textAlign: "center" }}>
          <div className={classes.Title}>{filteredDataContent.name}</div>
          <div className={classes.SubTitle}>{filteredDataContent.otherInfo}</div>
          <div className={classes.AuthorSection}>
            {author &&
              author.map((elem) => <Author key={elem.name} name={elem.name} img={elem.img} />)}
            {/* <Author name="Saranpat" /> */}
          </div>
        </div>
        <div style={{ textAlign: "center" }} dangerouslySetInnerHTML={{ __html: content }}>
          {/* <img
            src="/image/projectExp/SIT01/sitinnovateMockDesign.jpg"
            style={{ width: 1000, maxWidth: "80%" }}
          /> */}
        </div>
      </Container>
    </div>
  );
};

export default Project;
