import { Suspense } from "react"
import MovieList from "./movies/MovieList"
import Loading from "./loading"



const Home = () => {
  return (
    <div className="p-4">

      <h1>Welcome to Movie Datasets</h1>


      <Suspense fallback={<Loading />} >
        <MovieList />
      </Suspense>




    </div>
  )
}
export default Home