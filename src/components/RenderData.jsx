export default function RenderData() { 
    const fruits = ["apple", "mango", "cherry", "grapes",];
    const person = {
        name: "Sagar",
        age:22
    }

    return (
        <>
            <h1>Fruit List</h1>
            <ul>
                { 
                fruits.map((fruit,index) => (
                    <li key={index}>{fruit}</li>
                ))
                }
            </ul>
            <h2>
                Person Info
            </h2>
            <p>Name:{person.name}</p>
            <p>Age:{ person.age}</p>

        </>
    )
}