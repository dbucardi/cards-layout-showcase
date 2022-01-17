import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { JokesByCategoryDevPage } from "./pages/jokesByCategory/dev";
import { JokesByCategoryHistoryPage } from "./pages/jokesByCategory/history";
import { JokesByCategoryPoliticalPage } from "./pages/jokesByCategory/political";
import { JokePage } from "./pages/joke";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="jokes/dev" element={<JokesByCategoryDevPage />} />
        <Route path="jokes/history" element={<JokesByCategoryHistoryPage />} />
        <Route
          path="jokes/political"
          element={<JokesByCategoryPoliticalPage />}
        />
        <Route path="joke/:jokeId/" element={<JokePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
