import Head from 'next/head'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import { Content, Category } from '@/types/content'
import Row from '@/components/Row'

interface Props {
  contents: Content[],
  categories: Category[]
}

const Home = ({
  categories,
  contents}: Props) => {

  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Home Dinami</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner />
          <section className="md:space-y-24">
            {categories.map(category => (
              <Row key={category.id} title={category.title} contents={contents.filter(content => content.category === category.id)} />
            ))}
          </section>
      </main>
      {/* Modal / video */}
    </div>
  )
}
export default Home

export const getServerSideProps = async () => {
  // Firebase DB
  const categories = [{
    id: '100',
    title: 'Messages'
  },
  {
    id: '101',
    title: 'Position'
  },
  {
    id: '102',
    title: 'Activities'
  }]
  const contents = [  {
    title: 'CEO: James',
    html: '',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/dinami-27097.appspot.com/o/pexels-tiger-lily-7109087.jpg?alt=media&token=e14fe87a-5454-424f-8fec-27e96ef0590d',
    media: '',
    contentType: 'video',
    id: '0',
    category: '100'
  },
  {
    title: 'CTO: Keiko',
    html: '',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/dinami-27097.appspot.com/o/pexels-christina-morillo-1181472.jpg?alt=media&token=afbae11c-bdcb-4a66-b5ce-524aef635b5e',
    media: '',
    contentType: 'video',
    id: '1',
    category: '100'
  },
  {
    title: 'HR: Thompson',
    html: '',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/dinami-27097.appspot.com/o/pexels-cottonbro-studio-7437495.jpg?alt=media&token=c63fb4dd-c082-4826-b599-6b145b479515',
    media: '',
    contentType: 'video',
    id: '2',
    category: '100'
  },
  {
    title: 'Sales: Kim',
    html: '',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/dinami-27097.appspot.com/o/pexels-yan-krukau-8867237.jpg?alt=media&token=2f2af963-9e19-4bf4-8229-3739b7e0ad6b',
    media: '',
    contentType: 'video',
    id: '3',
    category: '100'
  },
  {
    title: 'Lead Engineer: Larry',
    html: '',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/dinami-27097.appspot.com/o/pexels-ono-kosuki-5648401.jpg?alt=media&token=f07b86e3-b2b0-47db-9113-0f9212cc8edf',
    media: '',
    contentType: 'video',
    id: '4',
    category: '100'
  },
  {
    title: 'Sr Web Designer',
    html: '',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/dinami-27097.appspot.com/o/pexels-andrea-piacquadio-806835.jpg?alt=media&token=d27873dd-5aae-4459-8348-b6ab903ec51c',
    media: '',
    contentType: 'video',
    id: '0',
    category: '101'
  },
  {
    title: 'Jr Web Developer',
    html: '',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/dinami-27097.appspot.com/o/company.jpg?alt=media&token=6db4e77a-3992-482a-98be-2f7cd463ab01',
    media: '',
    contentType: 'video',
    id: '1',
    category: '101'
  },
  {
    title: 'HR Assistance',
    html: '',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/dinami-27097.appspot.com/o/pexels-cottonbro-studio-7437495.jpg?alt=media&token=c63fb4dd-c082-4826-b599-6b145b479515',
    media: '',
    contentType: 'video',
    id: '2',
    category: '101'
  },
  {
    title: 'Inside Sales',
    html: '',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/dinami-27097.appspot.com/o/pexels-yan-krukau-8867237.jpg?alt=media&token=2f2af963-9e19-4bf4-8229-3739b7e0ad6b',
    media: '',
    contentType: 'video',
    id: '3',
    category: '101'
  },
  {
    title: 'Mid Server Side Engineer',
    html: '',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/dinami-27097.appspot.com/o/pexels-cottonbro-studio-7437489.jpg?alt=media&token=46806562-8a7b-49b4-8677-4601be947d58',
    media: '',
    contentType: 'video',
    id: '4',
    category: '101'
  },
  {
    title: 'TV appearance',
    html: '',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/dinami-27097.appspot.com/o/company.jpg?alt=media&token=6db4e77a-3992-482a-98be-2f7cd463ab01',
    media: '',
    contentType: 'video',
    id: '5',
    category: '102'
  },
  {
    title: 'Christmas party 2022',
    html: '',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/dinami-27097.appspot.com/o/pexels-jonathan-nenemann-13434458.jpg?alt=media&token=5bc6c379-9d5a-45ad-a38f-19f0fc50e436',
    media: '',
    contentType: 'video',
    id: '6',
    category: '102'
  },
  {
    title: 'Deep dive our service',
    html: '',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/dinami-27097.appspot.com/o/pexels-it-services-eu-7596370.jpg?alt=media&token=3d4e210a-46b6-4562-a63e-dc5676df0508',
    media: '',
    contentType: 'video',
    id: '7',
    category: '102'
  }]
  
  return {
    props: {
      categories: categories,
      contents: contents
    }
  }
}
