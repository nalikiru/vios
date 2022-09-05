import { Video } from '../type'
import NoPin from '../components/NoPin'
import VideoCard from '../components/VideoCard'
import axios from 'axios'
import { BASE_URL } from '../utils'

interface Iprops {
  videos: Video[]
}

const Home = ({ videos }: Iprops) => {
  console.log(videos)
  return (
    <body>
    <div className="flex bg-[#F8F8F8] flex-col vid w-[245px] lg:w-[700px]">
      {videos.length ? (
        videos.map((video: Video) => (
          <VideoCard post={video} key={video?._id} />
        )) 
      ) : (
        <NoPin text={'No video found!'} />
      )
    }
    </div>
    </body>
  )
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/post`);

  return{
    props: {
      videos: data
    }
  }
}

export default Home