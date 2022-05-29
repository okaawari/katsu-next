import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const tabs = [
    {
        title: 'АНИМЭ',
        icon: ''
    },
    {
        title: 'МАНГА',
        icon: ''
    },
]

export default function Navbar() {
    const [selected, setSelected] = useState(0)
    const location = useRouter()
    return location.pathname !== '/profile' && (
        <div className='bg-[#221C22] px-[60px] flex justify-center'>
            <div className='flex flex-row max-w-[1512px] w-full justify-between pt-[36px] pb-[60px]'>
                <div className='w-[313px] h-[64px] rounded-[14px] bg-[#54169C] shadow-[6px_6px_8px_rgba(0, 0, 0, 0.16)] flex flex-row'>
                    {
                        tabs.map((data, index) => {
                            return(
                                <div key={index} onClick={() => setSelected(index)} className={`w-1/2 cursor-pointer flex items-center justify-center rounded-[14px] h-full ${selected === index && 'bg-[#DB169A]'}`}>
                                    <p className='text-[20px] text-[#FFECFE]'>{data.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <input className='max-w-[403px] w-full h-[60px] bg-white bg-opacity-40 backdrop-blur-[30px] rounded-[30px]'/>
                <div className='flex flex-row items-center'>
                    <p style={{textShadow: '0px 3px 6px #00000029'}} className='text-[20px] text-white font-medium'>Renshou</p>
                    <Link href="/signup">
                        <div className='w-[60px] h-[60px] ml-[13px] cursor-pointer border-[3px] border-[#DB169A] rounded-full'>

                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
