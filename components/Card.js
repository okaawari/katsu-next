import Link from 'next/link'
import { generateTimeAgo } from '../utils/Utils'

const Card = ({ article }) => {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <div className='w-[211px] min-h-[396px] max-h-[396px] cursor-pointer flex flex-col h-full relative justify-between'>
                <div>
                    <img alt='' style={{objectFit: 'cover'}} className='bg-black hover:opacity-50 w-full h-[310px] rounded-[10px]' src={article.poster}/>
                    <p className='text-[#D9D9D9] w-[75px] h-[30px] flex items-center justify-center rounded-[10px] text-[15px] bg-[#000000] bg-opacity-70 absolute top-[271px] right-[7.8px]'>{article.duration} минут</p>
                    <p style={{overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, lineClamp: 2, WebkitBoxOrient: 'vertical'}}  className='text-[#D9D9D9] text-[20px] mt-[10px]'>{article.name}</p>
                </div>
                <div className='flex flex-row text-[#D9D9D9]'>
                    <p>{article.views} • {generateTimeAgo(article.created_at)}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card