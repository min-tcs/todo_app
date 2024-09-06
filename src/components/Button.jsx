export default function Button() {
    let text = ""
    const handleClick = () => {
       console.log("button clicked")
    }
    return (
        <>
            
            <button onClick={(handleClick)}>Click me</button>
            <h1>{text}</h1>
        </>
    )
}