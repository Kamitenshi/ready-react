import { useState } from "react"
import { useDispatch } from "react-redux"
import { add, addSeveral, remove } from "./counterSlice"

const CounterModifier: React.FC = () => {
    //HOWTO Manage global state n°4 - Modify the values in the store from a component
    const dispatch = useDispatch()
    const addClick = () => dispatch(add())
    const removeClick = () => dispatch(remove())
    const addSeveralClick = () => {
        if (increment)
            dispatch(addSeveral(+increment))
    }

    const [increment, setIncrement] = useState<string>()
    return (
        <div>
            <h1>Counter modifier</h1>
            <input type="number" placeholder="Number to add" onChange={(e) => setIncrement(e.target.value)} />
            <button onClick={addSeveralClick}>Add Several</button>
            <button onClick={addClick}>Add</button>
            <button onClick={removeClick}>Remove</button>
        </div>
    )
}

export default CounterModifier