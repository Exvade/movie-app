import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies, setSearchTerm } from '../store/store';
import moviezone from './assets/logo/moviezone.png';
import Banner from './components/Banner';
import Header from './components/Header';
import Movie from './components/Movie';

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies); // Ambil dari store Redux
  const search = useSelector((state) => state.movies.searchTerm);

  const defaultMovies = ['Batman', 'Iron Man', 'Frozen', 'Joker', 'Brave', 'Interstellar', 'Inception', 'The Matrix', 'Avatar', 'Jurassic Park'];

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const randomMovie = defaultMovies[Math.floor(Math.random() * defaultMovies.length)];
        const query = search || randomMovie;
        const response = await axios.get(`http://www.omdbapi.com/?apikey=6dedb8c5&s=${encodeURIComponent(query)}`);
        dispatch(setMovies(response.data.Search)); // Simpan ke Redux
      } catch (error) {
        console.error('Failed to fetch movies', error);
      }
    };

    fetchMovies();
  }, [search, dispatch]);

  const handleSearch = (searchTerm) => {
    dispatch(setSearchTerm(searchTerm)); // Update search term di Redux
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
