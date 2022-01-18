import chuckNorrisImg from '../../../assets/images/chuck-norris-card2.jpg';
import { JokesByCategory } from '../';

export function JokesByCategoryHistoryPage() {
  return (
    <JokesByCategory
      category="history"
      headerImage={<img alt="Chuck Norris holding a gun in combat" src={chuckNorrisImg} />}
    />
  );
}
