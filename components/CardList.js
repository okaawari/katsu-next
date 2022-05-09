import ArticleItem from './Card'

const ArticleList = ({ articles }) => {
    return (
        <div className='w-full bg-[#221C22]'>
            <div className='w-full flex flex-wrap gap-[43px] px-[66px]'>
                {articles.map((article) => (
                    <ArticleItem key={article.id} article={article} />
                ))}
            </div>
        </div>
    )
}

export default ArticleList