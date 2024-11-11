import moviezone from "../src/assets/logo/moviezone.png";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Movie from "./components/Movie";
function App() {

  return (
    <>
      <Header title={moviezone} />
      <Banner />
      <Movie />
    </>
  )
}

export default App
