import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        Climate Change
      </Link>
      <ul>



        <CustomLink to="/solutions">Solutions</CustomLink>
        <CustomLink to="/map">Map</CustomLink>
        <CustomLink to="/quiz">Quiz</CustomLink >
        <CustomLink to="/donation">Donation</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/blog">Blog</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/carbonfootprintcalculator">CarbonFootprintCalculator</CustomLink>
        <CustomLink to="/newsletter">Newsletter</CustomLink>







      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
