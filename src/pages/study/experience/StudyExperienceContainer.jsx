import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import StudyExperienceComponent from "./StudyExperienceComponent";

const StudyExperienceContainer = () => {

  const location = useLocation();
  const isExperienceMain =
  location.pathname === "/study/experience" ||
  location.pathname === "/study/experience/";

  if (!isExperienceMain) {
    return <Outlet />;
  }

  return (
    <>
      <StudyExperienceComponent />
    </>
  );
};

export default StudyExperienceContainer;