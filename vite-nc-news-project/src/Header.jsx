import { Link } from "react-router-dom";

export default function Header () {
    return (
        <>
        <h1>NC NEWS</h1>
        <nav><Link id='view-articles' to='/articles'>Articles</Link></nav>
        </>
    )
   
}