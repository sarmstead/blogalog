import type { ArticlesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <ul>
      {articles.map((article) => {
        const date = new Date(article.createdAt)

        return (
          <article key={article.id}>
            <header>
              <h3>{article.title}</h3>
              <h4>{date.toLocaleString('en-US')}</h4>
            </header>
            <p>{article.body}</p>
          </article>
        )
      })}
    </ul>
  )
}
