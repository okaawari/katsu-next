import Link from 'next/link'
import { generateTimeAgo } from '../../utils/Utils'
import Image from 'next/image'

const Card = ({ article }) => {
    return (
        <Link href={`/article/${article.id}`}>
            <div className='max-w-[211px] w-full cursor-pointer'>
                <div className='relative'>
                    {/* <img alt='' style={{objectFit: 'cover'}} className='hover:opacity-50 w-full h-full rounded-[10px]' src={article.poster}/> */}
                    <Image
                        src={article.poster}
                        alt=""
                        width={500}
                        height={750}
                        className='hover:opacity-50 w-full h-full rounded-[10px]'
                    />
                    <p className='text-[#D9D9D9] w-full max-w-[75px] py-[3px] flex items-center justify-center rounded-[10px] text-[15px] bg-[#000000] bg-opacity-70 absolute bottom-[10px] right-[7.8px]'>{article.duration} минут</p>
                </div>
                <p className='text-[#D9D9D9] text-[15px] 2xl:text-[20px] mt-[10px] truncate-2'>{article.name}</p>
                <div className='inline-flex text-[#D9D9D9]'>
                    <p className='text-[13px] 2xl:text-[15px] whitespace-nowrap'>{article.views} • {generateTimeAgo(article.created_at)}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card