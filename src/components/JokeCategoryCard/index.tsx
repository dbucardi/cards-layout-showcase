import { StyledJokeCategoryCard, StyledSkillItem } from "./style";
import { ISkillItem } from "./interfaces";
import { CircleImage } from "../CircleImage";
import { useMemo, useState } from "react";
import debounce from "lodash.debounce";

export interface IJokeCategoryCardProps {
  thumbImage: React.ReactNode;
  category: string;
  cardTitle: string;
  skills: ISkillItem[];
}

export function JokeCategoryCard(props: IJokeCategoryCardProps) {
  const [flipped, setFlipped] = useState(false);
  const { cardTitle, skills = [], category, thumbImage } = props;

  const handleMouseEnter = useMemo(
    () =>
      debounce(() => {
        setFlipped(true);
      }, 100),
    []
  );

  const handleMouseLeave = useMemo(
    () =>
      debounce(() => {
        setFlipped(false);
      }, 300),
    []
  );

  return (
    <StyledJokeCategoryCard
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`card__inner ${flipped && "card--flipped"}`}>
        <div className="card__face card__face--front">
          <h2>{category}</h2>
        </div>
        <div className="card__face card__face--back">
          <div className="card__content">
            <div className="card__header">
              <CircleImage>{thumbImage}</CircleImage>
              <h2>{cardTitle}</h2>
            </div>
            <div className="card__body">
              <h3>{category} skills</h3>
              <ul className="card__skills">
                {skills.map((skill) => (
                  <StyledSkillItem key={skill.label}>
                    <span>{skill.label}</span>
                    <span>
                      <strong>{skill.value}</strong>
                    </span>
                  </StyledSkillItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </StyledJokeCategoryCard>
  );
}
