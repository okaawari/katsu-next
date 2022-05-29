import {server} from '../config'
import CardList from '../src/components/CardList'

export default function Home({articles}) {
  return (
    <div>
      <CardList articles={articles} />
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`)
//   const articles = await res.json()
//   return {
//     props: {
//       articles
//     }
//   }
// }

export const getStaticProps = async () => {
  const res = await fetch(`https://fukkatsuhub.com/api/animes`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}