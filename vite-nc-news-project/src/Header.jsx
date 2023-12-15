import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";

export default function Header () {
    const { user } = useContext(UserContext)
    return (
        <>
        <h1>NC NEWS</h1>
        <nav><Link id='view-articles' to='/articles'>Articles</Link>
            {/* <Link id='view-users' to='/users'>Users</Link> */}
            </nav>
            {/* <p className='current-user'>{user} is logged in</p> */}
        </>
    )
   
}