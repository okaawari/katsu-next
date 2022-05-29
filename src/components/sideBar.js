import React, { useState } from 'react'
import Link from 'next/link'


const sideBarMenu = [
    {
        title: 'Эхлэл',
        route: '/'
    },
    {
        title: 'Миний хуудас',
        route: '/profile'
    },
    {
        title: 'Анимэ жагсаалт',
        route: '/animes'
    },
    {
        title: 'Манга жагсаалт',
        route: '/sda'
    },
    {
        title: 'Төрлүүд',
        route: '/sda1'
    },
]

export default function RightSideBar() {
    const [selectedTab, setSelectedTab] = useState(0)
    return (
        
        <div style={{display: 'flex', position: 'sticky', top: 0, maxWidth: 260, height: 'screen'}} className='h-screen hidden w-full max-w-[260px] bg-[#292C37] md:flex sticky top-0 pt-[32px] items-center'>
            <div className='flex flex-row pl-[25.5px] absolute top-[20px]'>
                {/* <img  alt='' className='w-[53.5px] h-[60px]'/> */}
                <div className='h-[60px] ml-[10px]'>
                    <p className='text-white text-[26px]'>FUKKATSU</p>
                    <p className='text-[14px] text-white'>もう少しだけ</p>
                </div>
            </div>
            <div>
                {
                    sideBarMenu.map((data, index) => {
                        return(
                            <Link key={index} href={data.route}>
                                <div onClick={() => setSelectedTab(index)} style={{background: selectedTab === index && 'transparent linear-gradient(270deg, #3C4460 0%, #DB169ACF 100%) 0% 0% no-repeat padding-box'}} className={`flex items-center cursor-pointer pl-[31px] w-full h-[65px] ${selectedTab === index && 'rounded-[23px]'}`}>
                                    <p className='text-white text-[20px]'>{data.title}</p>
                                    {
                                        selectedTab === index && 
                                        <span className='w-[2px] h-[24px] bg-[#FFA0E0] absolute left-0'/>
                                    }
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
