import {
  StyledJokeCategoryCard,
  StyledInnerCard,
  StyledCardFront,
  StyledCardBack,
  StyledCardHeader,
  StyledCardBody,
  StyledSkillItem,
} from './style';
import { ISkillItem } from './interfaces';
import { CircleImage } from '../CircleImage';
import { useMemo, useState } from 'react';
import debounce from 'lodash.debounce';

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
    <StyledJokeCategoryCard onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <StyledInnerCard flipped={flipped}>
        <StyledCardFront>
          <h2>{category}</h2>
        </StyledCardFront>
        <StyledCardBack>
          <StyledCardHeader>
            <CircleImage>{thumbImage}</CircleImage>
            <h2>{cardTitle}</h2>
          </StyledCardHeader>
          <StyledCardBody>
            <h3>{category} skills</h3>
            <ul>
              {skills.map((skill) => (
                <StyledSkillItem key={skill.label}>
                  <span>{skill.label}</span>
                  <span>
                    <strong>{skill.value}</strong>
                  </span>
                </StyledSkillItem>
              ))}
            </ul>
          </StyledCardBody>
        </StyledCardBack>
      </StyledInnerCard>
    </StyledJokeCategoryCard>
  );
}
