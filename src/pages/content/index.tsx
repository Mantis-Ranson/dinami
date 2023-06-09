import { useRouter } from 'next/router'
import Header from '@/components/Header'
import Head from 'next/head'
import { GlobeAltIcon } from '@heroicons/react/24/solid'
import useWindowSize from "@/hooks/windowSide"

function Content() {
    const router = useRouter()
    const size = useWindowSize();
    const getVideoRatioWidth = () => size.width ? size.width * 0.5625 : 600
    const { c } = router.query
    return (
        <div className="relative h-screen bg-gradient-to-b">
          <Head>
            <title>{c}</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <main className="pt-16">
            <div className="flex justify-center">
              <iframe width={size.width} height={getVideoRatioWidth()} src="https://www.youtube.com/embed/FFAMYW2POBw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className='pl-6 pr-6'>
              <div className="pb-4 pt-4 md:max-w-5xl">
                <h1 className="font-bold">
                  CEO: Ranson Tyrone
                </h1>
                <div className="flex items-center space-x-2 text-sm font-light pt-2 pb-2">
                  <a target="_blank" href="https://www.youtube.com/@devippo/videos" rel="noopener noreferrer">
                    <GlobeAltIcon className="h-6 w-6"/>
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/in/tyrone-ranson-702815173" rel="noopener noreferrer">
                  <img
                      src="https://firebasestorage.googleapis.com/v0/b/dinami-27097.appspot.com/o/icons8-linkedin-circled-144.png?alt=media&token=29c57624-2127-43b1-8a08-042c2177c01d"
                      alt=""
                      width={30}
                      height={30}
                      />
                  </a>
                </div>
              </div>
              <div className="bg-[#333] text-white p-4 rounded-md md:max-w-5xl">
                <p>
                  {`Hello viewers,
                  Thank you for viewing Devippo's page.
                  Feel free to follow me on twitter & Linkedin as I often post there.`}
                </p>
              </div>
            </div>
          </main>
      </div>
    )
}

export default Content