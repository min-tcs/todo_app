export default function ConditionalRendering({ isLoggedIn, userName }) {
    
    return (
        <>
            {isLoggedIn ?( <h1>Welcome { userName}</h1>):("please login")}
        </>
    )

}