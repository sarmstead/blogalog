import { Link, routes } from '@redwoodjs/router'
import type { Post } from 'types/graphql'

interface Props {
  article: Post
}

const Article = ({ article }: Props) => {
  const date = new Date(article.createdAt)
  return (
    <article>
      <header>
        <Link to={routes.article({ id: article.id })}>
          <h3>{article.title}</h3>
        </Link>
        <h4>{date.toLocaleString('en-US')}</h4>
      </header>
      <p>{article.body}</p>
    </article>
  )
}

export default Article
