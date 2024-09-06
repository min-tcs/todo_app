
import Counter from './Counter'
export default function ParentCounter() { 
    return (
        <>
            <Counter index= '0' value='0' />
            <Counter index='1' value='1' />
            <Counter index='2' value='2' />
            <Counter index='3' value='3' />
            <Counter index='4' value='4'/>
        </>
    )
}