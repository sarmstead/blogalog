import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { currentUser, logOut, isAuthenticated } = useAuth()
  return (
    <>
      <header>
        <div className="flex-between">
          <h1>Blogalog</h1>
          {isAuthenticated ? (
            <div>
              <span>{currentUser.email}&nbsp;</span>
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
        </div>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Drop a Line</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <small>
          Copyright © 2022 Sunjay Armstead. Code inspired and modified from a
          super cool&nbsp;
          <a href="https://redwoodjs.com/docs/tutorial/" target="_blank">
            RedwoodJS tutorial
          </a>
          .
        </small>
      </footer>
    </>
  )
}

export default BlogLayout
