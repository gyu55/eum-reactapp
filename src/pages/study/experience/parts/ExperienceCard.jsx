import React from "react";
import { NonUser } from "../style";

const ExperienceCard = ({ item }) => {
  return (
    <NonUser.CardLink to={item.link}>
      <NonUser.Thumbnail $bg={item.color}>
        <NonUser.Emoji>{item.img}</NonUser.Emoji>
      </NonUser.Thumbnail>

      <NonUser.CardBody>
        <NonUser.Level>{"★".repeat(item.level)}</NonUser.Level>
        <NonUser.CardTitle>{item.title}</NonUser.CardTitle>
        <NonUser.CardDesc>{item.desc}</NonUser.CardDesc>
      </NonUser.CardBody>
    </NonUser.CardLink>
  );
};

export default ExperienceCard;
