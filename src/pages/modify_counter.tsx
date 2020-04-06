import { NextPage } from 'next'
import Link from 'next/link'
import { home } from '../constants/pages'
import Counter from '../stateful-components/Counter'
import CounterModifier from '../stateful-components/CounterModifier'

const AboutPage: NextPage = () => {
    return (
        <div>
            <h1>About page</h1>
            {/* HOWTO Manage global state n°5 - Use the stateful-component */}
            <Counter />
            <CounterModifier />
            <p>You can increase or decrease the counter here.</p>
            <p>Put a value in the input box and press <strong>Add several</strong></p>
            <p>Press the <strong>Add</strong> and <strong>Remove</strong> buttons</p>
            <br />
            <p>When you are done, go back to the home page by clicking on the button and watch the result</p>
            <h1>Return to home page now</h1>
            <Link href={home.href}>
                <a>Home</a>
            </Link>
        </div>
    )
}

export default AboutPage