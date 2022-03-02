import React from "react";
import { Container } from "reactstrap";
import workData from "../../assets/json/workExp.json";
import achievementData from "../../assets/json/achievementExp.json";
import projectData from "../../assets/json/projectExp.json";

import classes from "./project.module.css";
import "./content-style.css";
import Author from "../../components/project-page-comp/authors-obj/authors";

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
  const { content, author, stack } = filteredDataContent;

  return (
    <div>
      <div style={{ marginTop: 47.5 }}></div>
      <div className={classes.Header} style={{ textAlign: "center" }}>
        <Container>
          <div className={classes.Title}>{filteredDataContent.name}</div>
          <div className={classes.SubTitle}>{filteredDataContent.otherInfo}</div>
          <div className={classes.AuthorSection}>
            {author &&
              author.map((elem) => <Author key={elem.name} name={elem.name} img={elem.img} />)}
          </div>
        </Container>
        {stack && (
          <div className={classes.TechStack}>
            <Container>
              <div style={{ fontSize: 24, fontWeight: 500 }}>Tech Stack</div>
              <div>
                {stack.map((elem) => (
                  <img src={`/image/techstack_icon/${elem}.png`} style={{ width: 60 }} alt={elem} />
                ))}
              </div>
            </Container>
          </div>
        )}
      </div>
      <Container style={{ marginBottom: 40 }}>
        <div style={{ textAlign: "center" }} dangerouslySetInnerHTML={{ __html: content }}></div>
      </Container>
    </div>
  );
};

export default Project;
