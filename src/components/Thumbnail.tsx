import { Movie } from "@/types/content"
import Image from "next/image"

interface Props {
    movie: Movie
}
function Thumbnail({movie}: Props) {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition
    duration-200 md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        alt=""
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        fill
      />
    </div>
  )
}

export default Thumbnail