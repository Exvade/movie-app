import Moviezone from '../assets/logo/moviezone.png'

export default function Navbar() {
  return (
    <header className='bg-black bg-opacity-70 w-[90vw] absolute left-1/2 transform -translate-x-1/2 flex h-[60px] justify-around text-white items-center rounded-md mt-4 py-10'>
      <img src={Moviezone} alt="" />

      <nav className='w-[40%]'>
        <ul className='flex justify-between font-semibold'>
          <li className='text-red'>Home</li>
          <li>Movie</li>
          <li>Tv Shows</li>
          <li>Anime</li>
          <li>Series</li>
          <li>Trending</li>
        </ul>
      </nav>

      <button className='font-bold px-4 py-2 bg-purple rounded-md'>
        Login
      </button>
    </header>
  )
}