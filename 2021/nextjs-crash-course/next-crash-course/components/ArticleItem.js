import Link from 'next/link'
import { card } from '../styles/Article.module.css'

const ArticleItem = ({ article }) => {
  return (
    <Link href={`/article/${article.id}`}>
      <a className={card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  )
}

export default ArticleItem
