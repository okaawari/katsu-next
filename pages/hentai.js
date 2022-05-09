import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/card'

const menu_data  = [
    {
        title: 'Ангилах',
        id: 1,
        sub: [
            {
                title: 'Сүүлд нэмэгдсэн'
            },
            {
                title: 'Их үзсэн'
            },
            {
                title: 'Бага үзсэн'
            },
            {
                title: 'Үсгийн дараалал'
            },
        ]
    },
    {
        title: 'Төлөв',
        id: 2,
        sub: [
            {
                title: 'Гарч байгаа',
                type: 1
            },
            {
                title: 'Дууссан',
                type: 0
            },
        ]
    },
    {
        title: 'Гарсан он',
        id: 3,
        sub: [
            {
                title: '2022'
            },
            {
                title: '2021'
            },
            {
                title: '2020'
            },
            {
                title: '2019'
            },
            {
                title: '2018'
            },
            {
                title: '2017'
            },
        ]
    },
    {
        title: 'Студи',
        id: 4,
        sub: [
            {
                title: '2022'
            },
            {
                title: '2021'
            },
            {
                title: '2020'
            },
            {
                title: '2019'
            },
            {
                title: '2018'
            },
            {
                title: '2017'
            },
        ]
    },
    {
        title: 'Орчуулагч',
        id: 5,
        sub: [
            {
                title: 'Сүүлд нэмэгдсэн'
            },
            {
                title: 'Их үзсэн'
            },
        ]
    },
]

export default function Animes() {
    const [animeFilter, setAnimeFilter] = useState(null)
    const [typeAnime, setTypeAnime] = useState(null)
    const [hentai, setHentai] = useState([])
    useEffect(() => {
        axios.get('https://fukkatsuhub.com/api/animes').then(res => {
            setHentai(res.data)
        })
    }, [])

    return (
        <div className='px-[30px] sm:px-[60px]'>
            <div className='flex flex-row gap-[42px]'>
                {
                    menu_data.map((data, index) => {
                        return(
                            <div onClick={() => setAnimeFilter(data.id)} className='relative cursor-pointer bg-[#2C262C] w-[212px] h-[40px] flex items-center justify-center' key={index}>
                                <p className='text-[20px] text-[#D9D9D9]'>{data.title}</p>
                                {
                                    data.id === animeFilter &&
                                    <div className='border-t absolute z-10 top-[40px] w-full flex flex-col items-center justify-center bg-[#2C262C]'>
                                        {
                                            data.sub.map((data, index) => {
                                                return(
                                                    <div key={index} className="hover:bg-[#221C22] w-full text-center">
                                                        <p onClick={() => setTypeAnime(data.type)} className='py-[8px] text-[20px] cursor-pointer text-[#D9D9D9]'>{data.title}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-full z-0 flex flex-wrap gap-[43px] mt-[24px]'>
                {
                    hentai?.map((data, index) => {
                        return(
                            <Card key={index} article={data}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
