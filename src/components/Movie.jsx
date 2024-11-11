import React from 'react';
import Card from './Card';
import SearchBar from './SearchBar';

export default function Movie({ movies, onSearch }) {
  return (
    <div className="bg-[#1b1b1b]">
      <div className="w-[90vw] mx-auto py-20">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-white uppercase">Movie List</h1>
          <SearchBar onSearch={onSearch} />
        </div>
        <div className="flex mt-4">
          <span className="border-b-[3px] border-rose-600 w-[100px] block"></span>
          <span className="border-b-[3px] border-gray-600 w-[100%] block"></span>
        </div>
        <div className="mt-4">
          <div className="flex flex-wrap justify-around">
            {movies.map(movie => (
              <Card key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
