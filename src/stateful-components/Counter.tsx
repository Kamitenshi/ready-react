import { useState } from "react"
import { connect, useDispatch } from "react-redux"
import { isNumber } from "util"
import { RootState } from "../utils/store"
import { add, addSeveral, getValue, remove } from "./counterSlice"

interface CounterInferface {
    value: number
}

const Counter: React.FC<CounterInferface> = ({ value }) => {
    const dispatch = useDispatch()
    const [increment, setIncrement] = useState<string>()

    const addClick = () => dispatch(add())
    const removeClick = () => dispatch(remove())
    const addSeveralClick = () => {
        if (increment && isNumber(increment))
            dispatch(addSeveral(increment))
    }
    return (
        <div>
            <h1>Value: {value}</h1>
            <input type="number" placeholder="Number to add" onChange={(e) => setIncrement(e.target.value)} />
            <button onClick={addSeveralClick}>Add Several</button>
            <button onClick={addClick}>Add</button>
            <button onClick={removeClick}>Remove</button>
        </div>
    )
}

const mapToProps = (state: RootState) => ({
    value: getValue(state)
})

export default connect(mapToProps)(Counter)