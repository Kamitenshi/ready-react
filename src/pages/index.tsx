import { NextPage } from 'next'
import Link from 'next/link'
import { about } from '../constants/pages'
import Counter from '../stateful-components/Counter'

const HomePage: NextPage = () => {
    return (
        <div>
            <h1>Hello World !</h1>
            <Counter />
            <Link href={about.href}>
                <a title='Page about'>about</a>
            </Link>
        </div >
    )
}

export default HomePage