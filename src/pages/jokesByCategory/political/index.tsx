import chuckNorrisImg from '../../../assets/images/chuck-norris-card3.jpg';
import { JokesByCategory } from '../';

export function JokesByCategoryPoliticalPage() {
  return (
    <JokesByCategory
      category="political"
      headerImage={
        <img alt="Chuck Norris wearing a suit with the united states flag on the background" src={chuckNorrisImg} />
      }
    />
  );
}
