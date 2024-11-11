import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(input);  // Gunakan fungsi onSearch yang diterima dari props untuk mengirim input ke App.js
    setInput('');  // Opsi: Bersihkan input setelah submit
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        className="px-4 py-2 text-black w-[400px] rounded-sm"
        placeholder="Search movie"
        value={input}
        onChange={handleInputChange}
      />
      <button type="submit" className="px-4 py-2 ml-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
