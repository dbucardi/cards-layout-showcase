import { IJokeCategoryCardProps } from '../../components/JokeCategoryCard';
import chuckNorris1 from '../../assets/images/chuck-norris-card1.jpg';
import chuckNorris2 from '../../assets/images/chuck-norris-card2.jpg';
import chuckNorris3 from '../../assets/images/chuck-norris-card3.jpg';

export const categoriesData: IJokeCategoryCardProps[] = [
  {
    cardTitle: 'Chuck Norris',
    category: 'dev',
    skills: [
      { label: 'Frontend', value: 'Infinite' },
      { label: 'Backend', value: 'Infinite' },
      { label: 'QA', value: 'Not necessary' },
    ],
    thumbImage: <img src={chuckNorris1} alt="Chuck norris holdind a gun" className="thumb" />,
  },
  {
    cardTitle: 'Chuck Norris',
    category: 'history',
    skills: [
      { label: 'Ancient Greece', value: 'Infinite' },
      { label: 'World war I', value: 'Infinite' },
      { label: 'World war II', value: 'Infinite' },
    ],
    thumbImage: <img src={chuckNorris2} alt="Chuck norris holdind a gun" className="thumb" />,
  },
  {
    cardTitle: 'Chuck Norris',
    category: 'political',
    skills: [
      { label: 'Diplomacy', value: 'Infinite' },
      { label: 'Public speech', value: 'Infinite' },
      { label: 'Crisis management', value: 'Infinite' },
    ],
    thumbImage: <img src={chuckNorris3} alt="Chuck norris holdind a gun" className="thumb" />,
  },
];
