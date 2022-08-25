import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'


const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <h2>Welcome Home.</h2>
    </>
  )
}

export default HomePage
