import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Card({ title }) {
  const [movie, setMovie] = useState(null); // Awalnya null, menandakan belum ada data

  useEffect(() => {
    if (!title) return; // Jika title kosong, tidak melakukan fetch

    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=6dedb8c5&t=${encodeURIComponent(title)}`);
        setMovie(response.data); // Menyimpan data film yang didapat ke state
      } catch (error) {
        console.error('Failed to fetch movie', error);
        setMovie(null); // Reset movie state jika fetch gagal
      }
    };

    fetchMovie();
  }, [title]); // useEffect ini akan re-run jika prop 'title' berubah

  // Struktur tampilan untuk menampilkan data film, atau pesan jika tidak ada data
  return (
    <div className="p-5 mb-4 border border-gray-300 w-72">
      {movie ? (
        <>
          <h2 className="text-lg font-bold">{movie.Title || 'No Title Available'}</h2>
          <p className="text-sm text-gray-700">{movie.Plot || 'No description available.'}</p>
          <img src={movie.Poster || 'https://via.placeholder.com/150'} alt={movie.Title} className="w-full mt-3 rounded" />
        </>
      ) : (
        <p className="text-red-500">No movie found for '{title}'</p>
      )}
    </div>
  );
}
