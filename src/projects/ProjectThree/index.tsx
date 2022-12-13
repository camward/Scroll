import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./style.css";

const ProjectThree = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // на сколько % показан элемент
    // triggerOnce: true, // следить до 1-го срабатывания
  });

  return (
    <div>
      <h3>Intersection Observer</h3>
      <div className="section">
        <span>Section</span>
      </div>
      <div className={`section banner ${inView ? "active" : ""}`} ref={ref}>
        <span>Banner</span>
      </div>
      <div className="section">
        <span>Section</span>
      </div>
    </div>
  );
};

export default ProjectThree;
