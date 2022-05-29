import React, { useState } from 'react'

const menu = [
    {
        title: 'Тойм'
    },
    {
        title: 'Миний Жагсаалт'
    }
]

export default function Profile() {
    const [selected, setSelected] = useState(0)
    return (
        <div>
            <div className='relative'>
                {/* <img src='https://cdn.i-scmp.com/sites/default/files/styles/og_image_scmp_obituary/public/d8/images/methode/2020/06/08/4b0bdfc6-a639-11ea-8ea0-d7434be00753_image_hires_121748.jpg?itok=H_5iRX38&v=1591589877' alt='' className='w-full h-[400px] object-cover'/> */}
                {/* <img src='https://img1.kpopmap.com/2017/08/jisoo-blackpink-moonshot.jpg' alt='' className='w-[200px] object-cover h-[200px] absolute left-[158px] bottom-0 rounded-full'/> */}
                <div className='bg-[#2C262C] h-[80px] flex flex-row pl-[477px] items-center gap-[32px]'>
                    {
                        menu.map((data, index) => {
                            return(
                                <p onClick={() => setSelected(index)} key={index} className={`h-[50px] cursor-pointer flex items-center ${selected === index && 'bg-[#221C22]'} hover:bg-[#221C22] justify-center px-[20px] rounded-[10px] text-[20px] text-white`}>{data.title}</p>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex flex-wrap gap-[52px]'>
                <div>
                    <div className='#2C262C rounded-[10px]'>

                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}
