import chuckNorrisImg from '../../../assets/images/chuck-norris-card1.jpg';
import { JokesByCategory } from '../';

export function JokesByCategoryDevPage() {
  return (
    <JokesByCategory
      category="dev"
      headerImage={<img alt="Chuck Norris wearing a polo shirt holding a mug" src={chuckNorrisImg} />}
    />
  );
}
