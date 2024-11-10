import axios from "axios";
import { useEffect, useState } from "react";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("batman");

  useEffect(() => {
    const fetchMovies = async () => {
      if (!search) return; // Avoid empty search
      setLoading(true);
      try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=6dedb8c5&s=${encodeURIComponent(search)}`);
        setMovies(response.data.Search || []);
      } catch (error) {
        console.error("Error fetching the movie data", error);
      } finally {
        setLoading(false);
      }
    };

    const timerId = setTimeout(fetchMovies, 500); // Debounce the API call
    return () => clearTimeout(timerId); // Cleanup timeout on component unmount
  }, [search]); // Effect runs when search term changes

  return (
    <div className="bg-[#1b1b1b]">
      <div className="w-[90vw] mx-auto py-20">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-white uppercase">Movie List</h1>
          <input
            type="text"
            className="px-4 py-2 text-black w-[400px] rounded-sm"
            placeholder="search movie"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex mt-4">
          <span className="border-b-[3px] border-rose-600 w-[100px] block"></span>
          <span className="border-b-[3px] border-gray-600 w-[100%] block"></span>
        </div>
        <div className="mt-4">
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {movies.length > 0 ? movies.map((movie) => (
                <div key={movie.imdbID} className="p-4 bg-gray-800 rounded-md">
                  <img src={movie.Poster} alt={movie.Title} className="w-full h-[200px] object-cover rounded-md" />
                  <h2 className="mt-2 text-white">{movie.Title}</h2>
                  <p className="text-gray-400">{movie.Year}</p>
                </div>
              )) : <p className="text-white">No movies found.</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
