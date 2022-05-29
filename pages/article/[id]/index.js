import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const Article = ({article}) => {
    
    return (
        <div className='bg-[#221C22] flex justify-center px-[30px] sm:px-[60px]'>
            <div className='flex flex-wrap max-w-[1512px] py-[32px] w-full'>
                <div className='max-w-[1065px] w-full'>
                    <div className='w-full max-w-[1065px] h-[600px] border text-white'>
                        PLAYER
                    </div>
                    <div className='flex flex-row items-center justify-between mt-[24px]'>
                        <p className='text-white text-[25px] max-w-[942px]'>{article.name}</p>
                        <div className='flex flex-row items-center'>
                            {
                                article.sub_mn && <p className='bg-[#400740] py-[5px] px-[7px] rounded-[10px] text-white text-[15px]'>MN</p>
                            }
                            {
                                article.sub_eng && <p className='bg-[#400740] py-[5px] px-[7px] rounded-[10px] ml-[5px] text-white text-[15px]'>EN</p>
                            }
                        </div>
                    </div>
                    <p className='text-[#A7A7A7] text-[20px] mt-[9px]'>{article.views}&nbsp;&nbsp;•&nbsp;&nbsp;{new Date(article.created_at).getFullYear()}-{new Date(article.created_at).getMonth() + 1}-{new Date(article.created_at).getDate()}</p>
                    <div className='bg-[#2C262C] max-w-[1065px] w-full rounded-[10px] py-[14px] px-[12px] flex flex-wrap gap-[15px] mt-[19px]'>
                        {/* {
                            tags.map((data, index) => {
                                return(
                                    <p key={index} className='bg-[#441647] hover:bg-[#961796] px-[13px] cursor-pointer py-[8px] text-[#DEDEDE] text-[20px] rounded-[10px]'>{data}</p>
                                )
                            })
                        } */}
                    </div>
                    <div className='bg-[#2C262C] w-full rounded-[10px] mt-[19px] flex flex-row pt-[15px] px-[11px] pb-[33px]'>
                        {/* <img style={{objectFit: 'cover'}} src={article.poster} className='w-[199px] h-[292px] rounded-[10px]'/> */}
                        <div className='max-w-[794px] w-full ml-[44px]'>
                            <div className='flex flex-row items-center'>
                                <p className='text-[25px] text-white'>{article.name}</p>
                                <p className='text-[#A7A7A7] text-[20px] ml-[9px]'>{article.name_japanese}</p>
                            </div>
                            <p className='text-white text-[20px] mt-[16px]'>{article.synopsis}</p>
                            <div className='flex flex-row justify-between mt-[16px]'>
                                <div className='flex flex-col'>
                                    <span className='inline-flex text-[#A7A7A7] text-[20px]'>Студи:&nbsp;<p className='text-[#CE8CD2]'>{article.studio}</p></span>
                                    <span className='inline-flex text-[#A7A7A7] text-[20px] mt-[10px]'>Гарч эхлэсэн:&nbsp;<p>{article.aired_at}</p></span>
                                    <span className='inline-flex text-[#A7A7A7] text-[20px] mt-[10px]'>Төлөв:&nbsp;<p className='text-[#CE8CD2]'>{article.status === 0 ? 'Дууссан' : 'Гарч байгаа'}</p></span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='inline-flex text-[#A7A7A7] text-[20px]'>Төрөл:&nbsp;<p className='text-[#CE8CD2]'>{article.category_id === 1 ? 'OVA' : article.category_id === 2 ? 'TV-Series' : article.category_id === 3 ? 'Movie' : article.category_id === 4 ? 'ONA' : "NULL"}</p></span>
                                    <span className='inline-flex text-[#A7A7A7] text-[20px] mt-[10px]'>Хугацаа:&nbsp;<p>{article.duration} минут</p></span>
                                    <span className='inline-flex text-[#A7A7A7] text-[20px] mt-[10px]'>Анги:&nbsp;<p>{article.current_episode}/{article.episode_list}</p></span>
                                </div>
                                <div className='bg-[#403840] rounded-[10px] px-[17px] pt-[18px] pb-[11px] flex flex-row justify-evenly'>
                                    <div>
                                        <p className='text-[#CE8CD2] text-[20px] text-center'>{article.translator}</p>
                                        <p className='text-[#A7A7A7] text-[20px] mt-[6px] text-center'>Орчуулсан</p>
                                    </div>
                                    {
                                        article.review_by &&
                                        <div>
                                            <p className='text-[#CE8CD2] text-[20px] text-center'>{article.review_by}</p>
                                            <p className='text-[#A7A7A7] text-[20px] mt-[6px] text-center'>Хянасан</p>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#2C262C] w-full px-[30px] pt-[27px] pb-[108px] mt-[32px] rounded-[10px]'>
                        <p className='text-white text-[25px]'>Сэтгэгдэл</p>
                        <div className='flex flex-row items-center mt-[56px]'>
                            <div className='w-[50px] h-[50px] rounded-full border'>

                            </div>
                            <input placeholder='Сэтгэгдэл бичих...' className='ml-[18px] rounded-[10px] max-w-[848px] w-full h-[50px] px-[12px] bg-[#403840] text-[20px] text-[#A7A7A7]'/>
                            <div className='w-[50px] h-[50px] rounded-[10px] bg-[#403840] ml-[24px]'>

                            </div>
                        </div>
                        {/* <Comment/> */}
                    </div>
                </div>
                <div className='w-[412px] mt-[30px] 2xl:mt-0 2xl:ml-[30px] ml-0 bg-[#2C262C] rounded-[10px] py-[24px]'>
                    <p className='text-white text-center text-[20px]'>Бусад холбоотой анимэ</p>
                </div>
            </div>
        </div>
    )
}







export const getStaticProps = async (context) => {

    const res = await fetch(`https://fukkatsuhub.com/api/anime/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article,
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://fukkatsuhub.com/api/animes`)

    const articles = await res.json()

    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false,
    }
}


// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/articles/${context.params.id}`)

//     const article = await res.json()

//     return {
//         props: {
//             article,
//         },
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/articles`)

//     const articles = await res.json()

//     const ids = articles.map(article => article.id)
//     const paths = ids.map(id => ({params: {id: id.toString()}}))

//     return {
//         paths,
//         fallback: false,
//     }
// }

export default Article