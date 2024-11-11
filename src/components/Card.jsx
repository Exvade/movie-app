import React from 'react';

function Card({ movie }) {
  return (
    <div className="pb-5 mb-4 text-white border-gray-300 rounded-md w-[18%]">
      {movie ? (
        <>
          <img src={movie.Poster || 'https://via.placeholder.com/150'} alt={movie.Title} className="w-full mt-3 rounded" />
          <h2 className="text-lg font-bold">{movie.Title || 'No Title Available'}</h2>
        </>
      ) : (
        <p className="text-red-500">Movie information is not available</p>
      )}
    </div>
  );
}

export default Card;
