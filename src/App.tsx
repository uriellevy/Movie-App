import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from './components/pages/HomeView/HomeView';
import Favorites from './components/pages/Favorites/Favorites';
import Navbar from './components/Navbar';
import { MovieProvider } from "./components/store/movieContext"
import MostPopularMovies from './components/pages/MostPopularMovies/MostPopularMovies';
import PrivateWatchingList from './components/pages/privateWatchingList/PrivateWatchingList';
import SettingsWindow from './components/SettingsWindow';

function App() {

  return (
    <div className="app">
      <MovieProvider >
        <BrowserRouter>
          <Navbar />
          <SettingsWindow/>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/mostPopular" element={<MostPopularMovies />} />
            <Route path="/privateWatchingList" element={<PrivateWatchingList />} />
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </div>
  );
}

export default App;
