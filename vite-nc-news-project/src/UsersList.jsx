import { useState, useEffect, useContext } from "react"
import { getUsers } from "./api";
import { UserContext } from "./UserContext";

export default function UsersList(){
    // const [users, setUsers] = useState([])
    const { user, setUser } = useContext(UserContext)
    console.log(user);
    useEffect(() => {
        getUsers().then((res) => {
            setUsers(res);
        });
    }, []);
    const handleLogin = (user) => {
        setUser(user.username)
    }
    return (
        <>
            <h2>Here is list of users</h2>
            <p>Click the button of your username to login and comment!</p>
            {/* {users.map((user) => {

                return (
                    <div className="user-container" onClick={() => { handleLogin(user) }}>
                        <p>Username: {user.username}</p>
                        <p>Name: {user.name}</p>
                        <img className='avatar-img' src={user.avatar_url} />

                    </div>
                )

            })} */}
        </>
    )
}