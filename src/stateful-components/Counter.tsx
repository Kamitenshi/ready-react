import { connect } from "react-redux"
import { RootState } from "../utils/store"
import { counterDoubleSelector, counterValueSelector } from "./counterSlice"

const Counter: React.FC<CounterInferface> = ({ currentValue, doubleValue }) => {
    return (
        <div>
            <h1>Counter</h1>
            <h2>Value: {currentValue}</h2>
            <h2>Double of the value: {doubleValue}</h2>
        </div>
    )
}

interface CounterInferface {
    currentValue: number
    doubleValue: number
}


//HOWTO Manage global state n°3 - Use new slice in a stateful-component
const mapToProps = (state: RootState) => ({
    currentValue: counterValueSelector(state),
    doubleValue: counterDoubleSelector(state)
})

export default connect(mapToProps)(Counter)