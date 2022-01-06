import React from "react";
import { Container } from "reactstrap";
import ProjectCard from "./ProjectCard/ProjectCard";
import rawImg from "../../assets/image/project_img/readawrite_logo.jpg";
import hisImg from "../../assets/image/project_img/his_sim.jpg";

const ProjectTimeline = () => {
  return (
    <div style={{ backgroundColor: "#f6f6f6", overflow: "hidden" }}>
      <Container>
        <h1
          style={{
            textAlign: "center",
            padding: "40px 0",
            fontWeight: "bold",
          }}
        >
          PROJECT
        </h1>
        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          <ProjectCard cardPos="" projectImg={rawImg} />
          <ProjectCard cardPos="right" projectImg={hisImg} />
          {/* <ProjectCard cardPos="" /> */}
        </div>
      </Container>
    </div>
  );
};

export default ProjectTimeline;
