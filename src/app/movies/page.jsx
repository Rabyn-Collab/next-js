import { Suspense } from "react"
import Loading from "../loading"
import MovieList from "./MovieList"

export const metadata = {
  title: "Movies",
  description: "Movies List Show",
};

const MoviePage = () => {
  return (
    <div>

      <Suspense fallback={<Loading />} >
        <MovieList />
      </Suspense>





    </div>
  )
}
export default MoviePage