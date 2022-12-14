import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';

import SuggestedAccounts from './SuggestedAccounts';
import Discover from './Discover';
import Footer from './Footer';
import useAuthStore from '../store/authStore';
const Sidebar: NextPage = () => {
  const [showSide, setShowSide] = useState<Boolean>(true);
  const { pathname } = useRouter();
  const { fetchAllUsers, allUsers }: any = useAuthStore();

  const activeLink = 'flex items-center gap-3 hover:bg-red-300 p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded';

  const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded';

  return (
    <div>
      <div
        className='block xl:hidden m-2 ml-4 mt-3 text-xl w-20'
        onClick={() => setShowSide(!showSide)}
      >
        {showSide ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSide && (
        <div className='xl:w-400 bg-[#67e8f9] w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3 rounded-lg '>
         <div className='xl:pb-4 text-[#FFFFFF]'>
            <Link href='/'>
              <div className={pathname === '/' ? activeLink : normalLink}>
                <p className='text-xl'>
                  <AiFillHome />
                </p>
                <span className='capitalize text-xl text-white hidden xl:block'>
                  For You
                </span>
              </div>
            </Link>
          </div>
        <Discover />
          <SuggestedAccounts
            fetchAllUsers={fetchAllUsers}
            allUsers={allUsers}
          />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Sidebar;