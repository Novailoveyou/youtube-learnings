import ArticleItem from './ArticleItem'
import { grid } from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
  return (
    <div className={grid}>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  )
}

export default ArticleList
