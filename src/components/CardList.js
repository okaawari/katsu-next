import Card from './Card'

const CardList = ({ articles }) => {
    return (
        <div className='w-full bg-[#221C22]'>
            <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[27px] 2xl:gap-[35px] px-[15px] md:px-[66px]'>
                {articles.map((article) => (
                    <Card key={article.id} article={article} />
                ))}
            </div>
        </div>
    )
}

export default CardList