import React,{ useState, useEffect, useRef} from 'react'
import { Video } from '../type';
import type { NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go'

interface Iprops {
    post: Video;
} 

const VideoCard: NextPage<Iprops> = ({ post }) => {
    
  console.log(post.caption)
  
  const [isHover, setIsHover] = useState (false)
 
  const [playing, setPlaying] = useState(false)

  const [isVideoMuted, setIsVideoMuted] = useState(false)
   const videoRef = useRef<HTMLVideoElement>(null)
   const onVideoPress =() => {
    if(playing) {
      videoRef?.current?.pause();
      setPlaying(false)
    }else{
      videoRef?.current?.play();
      setPlaying(true)
    }
   }
  return (
    <div className="flex flex-col w-full border-b-2 border-b-2 border-gray-200 pb-6">
        <div>
            <div className='flex gap-3 p-2 corsor-pointer font-semibold rounded'>
               <div className='md:w-16 md:h-16 w-10 h-10'>
               <Link href='/'>
               {post.postedBy?.image && (
              <Link href={`/profile/${post.postedBy?._id}`}>
                <div>
                  <Image
                    className='rounded-full cursor-pointer'
                    src={post.postedBy?.image}
                    alt='user'
                    width={40}
                    height={40}
                  />
                </div>
              </Link>
            )}
               </Link>
               </div> 
               <div>
                <Link href='/'>
                  <div className="flex items-center gap-2">
                    <p className="flex gap-2 items-center md:text-md font-bold text-primary">{post.postedBy.userName}<GoVerified 
                    className="text-blue-400 text-md"
                    /></p>
                    <p className="capitalize font-medium text-xs text-gray-500 hidden md:block">{post.postedBy.userName}</p>
                  </div>
                </Link>
               
               </div>
             </div>
        </div>
        <div className="lg:ml-20 flex gap-4 relative">
        <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)} 
        className="rounded-3xl">
         <Link href={`/detail/${post._id}`}>
              <video
              loop
              ref={videoRef}  
              className="lg:w-[630px] h-[300px] md:h-[400px] lg:h-[330px] w-[750px] rounded-2xl cursor-pointer "
            src={post.video.asset.url}
              >
              </video>
         </Link>
         <Link href={`/detail/${post._id}`}>
              <p className='cursor-pointer text-center mt-1 font-normal w-full '>{post.caption}</p>
        </Link>

        </div>
        </div>
    </div>
  )
}

export default VideoCard