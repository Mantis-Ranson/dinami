import Image from "next/image"
import { FaPlay } from "react-icons/fa"

interface Props {
  /* */
}

function Banner({}: Props) {
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh]" style={{width:'calc(100% - 1px)'}}>
        <Image alt="" src="https://firebasestorage.googleapis.com/v0/b/dinami-27097.appspot.com/o/pexels-ketut-subiyanto-4350089.jpg?alt=media&token=223d84c0-4b49-4cfa-aebd-e2c1b7a17c0a"
        fill
        style={{objectFit: 'cover'}}
        />
      </div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        Dinami
      </h1>
      <p className="max-w-xs text-shadow-md text-sx md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl drop-shadow-lg"
      style={{textShadow: '1px 1px 1px black'}}>
        Ideas work,
        when we work together.
      </p>
    <div className="flex space-x-3">
      <button className="bannerButton bg-white text-black hover:opacity-75">
        <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7"/>Play
      </button>
    </div>
    </div>
  )
}

export default Banner