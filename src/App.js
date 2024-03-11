import Nav from './components/Nav.jsx';
import Landing from "./screens/Landing.jsx";
import Home from "./screens/Home.jsx";
import Characters from "./screens/Characters.jsx";
import CharacterDetail from "./screens/CharacterDetail.jsx";
import CharacterCreate from "./screens/CharacterCreate.jsx";
import CharacterEdit from "./screens/CharacterEdit.jsx";
import Episodes from "./screens/Episodes.jsx";
import EpisodeEdit from "./screens/EpisodeEdit.jsx";
import EpisodeCreate from "./screens/EpisodeCreate.jsx";
import Quotes from "./screens/Quotes.jsx";
import QuoteEdit from "./screens/QuoteEdit.jsx";
import QuoteCreate from "./screens/QuoteCreate.jsx";
import {Routes, Route, useLocation} from 'react-router-dom';
import './App.css';

function App() {

  const location = useLocation()

  return (
    <div className="App">
      {
        location.pathname === "/" ?
          <Landing />
        : 
        <>
          <Nav />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
            <Route path="/home" element={<CharacterCreate />} />
            <Route path="/home" element={<CharacterEdit />} />
            <Route path="/home" element={<Episodes />} />
            <Route path="/home" element={<EpisodeEdit />} />
            <Route path="/home" element={<EpisodeCreate />} />
            <Route path="/home" element={<Quotes />} />
            <Route path="/home" element={<QuoteEdit />} />
            <Route path="/home" element={<QuoteCreate />} />


          </Routes>
        </>
      }
    </div>
  );
}

export default App;
