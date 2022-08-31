import React,{ useState, useEffect, useRef} from 'react'
import { Video } from '../../type';
import type { NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link';
import { HiVolumeUp, HiVolumeOff} from 'react-icons/hi'
import { BsPlay,BsFillPlayFill,BsFillPauseFill } from 'react-icons/bs';
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
               <>
               <Image
                width={62}
                height={62}
                className="rounded-full"
                src={post.postedBy.image}
               alt="avater"
               layout="responsive"
               />
               </>
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
              className="lg:w-[630px] h-[300px] md:h-[400px] lg:h-[330px] w-[250px] rounded-2xl cursor-pointer "
            src={post.video.asset.url}
              >
              </video>
         </Link>
         <Link href={`/detail/${post._id}`}>
              <p className='cursor-pointer text-center mt-1 font-normal w-full '>{post.caption}</p>
        </Link>
         {isHover &&(
          <div className='absolute rounded-b-2xl gap-20 left-0  bottom-5  lg:w-[594px]  w-[240px] cursor-pointer left-0 md:left-0 lg:left-0 flex gap-0 right-9 lg:justify-bettween  p-3'>
          {playing ? (
            <button onClick={onVideoPress}>
              <BsFillPauseFill 
              className="text-[#67e8f9] text-xl lg:text-4xl"/>
            </button>
          ):(
            <button onClick={onVideoPress}>
              <BsFillPlayFill className='text-[#67e8f9] text-2xl lg:text-4xl' />
            </button>
          )
          }
           {isVideoMuted ? (
            <button onClick={() => {setIsVideoMuted(false)}}>
              <HiVolumeOff
              className="text-[#67e8f9] text-2xl lg:text-4xl"/>
            </button>
          ):(
            <button onClick={() => {setIsVideoMuted(true)}}>
              <HiVolumeUp className='text-[#67e8f9] text-2xl lg:text-4xl' />
            </button>
          )
          }
          </div>
         )}
        </div>
        </div>
    </div>
  )
}

export default VideoCard