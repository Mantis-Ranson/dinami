import { Content } from "@/types/content"
import Image from "next/image"
import Link from 'next/link'

interface Props {
    content: Content
}
function Thumbnail({content}: Props) {
  return (
    <div className="cursor-pointer transition duration-200 md:hover:scale-105">
    <div className="relative h-28 min-w-[180px] md:h-36 md:min-w-[260px]">
      <Link href="/content?c=Tyrone-Ranson">
        <Image
              alt=""
              src={`${content.thumbnail}`}
              className="rounded-sm md:rounded"
              fill
              style={{objectFit: 'cover'}}
          />
      </Link>
     </div>
     <div className="bottom-0 bg-none w-full rounded-b-lg md:rounded-b-lg pl-2"> {content.title}</div>
    </div>
  )
}

export default Thumbnail