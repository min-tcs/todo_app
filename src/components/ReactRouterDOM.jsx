import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams ,Link, Outlet,Navigate} from 'react-router-dom';
export default function ReactRouterDOM() { 
    return (<>
        <div>Navbar</div>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
        
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/about" element={<About></About>} >
                <Route path="ceo" element={<Ceo></Ceo>} />
                <Route path="company" element={<Company></Company>}/>
            </Route>
            <Route path="/user/:id" element={<User />} />
            <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
        </>

    )
}

function Home() { 
    return (<>
        <div>Home</div>
        <p>Our company is the best</p>
        </>)
}

function About() { 
    return (<>
        <div>About</div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae iste ad omnis ea rem maiores fugit cupiditate itaque impedit, quos laborum dicta eaque odio quibusdam minus qui vero fugiat quo.

        </p>
        <Outlet></Outlet>
        </>)
}

function Company() { 
    return (<>
        <div>About</div>
        <p>We never Layoff
        </p>
        <Outlet></Outlet>
        </>)
}

function Ceo() {
    return (
        <>
            <div>Best CEO</div>
            <Outlet></Outlet>
        </>
    )
}
 
function User() { 
    const [users, setUsers] = useState("");
    const { id } = useParams();
    useEffect(() => { 
        async function fetchUser() { 
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const result = await response.json();
            setUsers(result);
        }
        fetchUser();

    },[id]) 

    return (
        <div>
            {(users == null) ? <h1>Loading... </h1> : <p>I am user {id}</p>}
            <ul>
                <li>
                    {users.name}
                </li>

                <li>
                    {users.email}
                </li>
            </ul>
        </div>
    )

} 

function PageNotFound() { 
    return (<div>Oaaps page not found</div>)
}

