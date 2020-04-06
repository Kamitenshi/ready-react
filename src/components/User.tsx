import { useEffect, useState } from 'react'

interface UserInterface {
    name: string
}

const User: React.FC<UserInterface> = ({ name }) => {

    //HOWTO  Manage component state - React hooks
    const [currentName, setCurrentName] = useState(name)
    const [inputName, setInputName] = useState('')

    useEffect(() => {
        console.log("currentName was updated")
    }, [currentName])

    const handleClick = () => { setCurrentName(inputName) }

    return (
        <div>
            <h1>Salut</h1>
            <h2>{currentName}</h2>
            <input type="text" onInput={(value) => setInputName((value.target as HTMLInputElement).value)} />
            <button onClick={handleClick}>Change name</button>
        </div>
    )
}

export default User