import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moviezone from './assets/logo/moviezone.png';
import Banner from './components/Banner';
import Header from './components/Header';
import Movie from './components/Movie';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const defaultMovies = ['Batman', 'Iron Man', 'Frozen', 'Joker', 'Brave', 'Interstellar', 'Inception', 'The Matrix', 'Avatar', 'Jurassic Park'];

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const randomMovie = defaultMovies[Math.floor(Math.random() * defaultMovies.length)]; // Pilih film secara acak dari daftar
        const query = search || randomMovie; // Gunakan film acak jika belum ada pencarian
        const response = await axios.get(`http://www.omdbapi.com/?apikey=6dedb8c5&s=${encodeURIComponent(query)}`);
        setMovies(response.data.Search);
      } catch (error) {
        console.error('Failed to fetch movies', error);
      }
    };

    fetchMovies();
  }, [search]);

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
  };

  return (
    <>
      <Header title={moviezone} />
      <Banner />
      <Movie movies={movies} onSearch={handleSearch} />
    </>
  );
}

export default App;
