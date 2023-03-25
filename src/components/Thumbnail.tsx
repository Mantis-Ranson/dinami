import { Content } from "@/types/content"
import Image from "next/image"

interface Props {
    content: Content
}
function Thumbnail({content}: Props) {
  return (
    <div className="cursor-pointer transition duration-200 md:hover:scale-105">
    <div className="relative h-28 min-w-[180px] md:h-36 md:min-w-[260px]">
        <Image
            alt=""
            src={`${content.thumbnail}`}
            className="rounded-sm md:rounded-t-lg"
            fill
            style={{objectFit: 'cover'}}
        />
     </div>
     <div className="bottom-0 bg-black w-full rounded-b-lg md:rounded-b-lg pl-2"> {content.title}</div>
    </div>
  )
}

export default Thumbnail