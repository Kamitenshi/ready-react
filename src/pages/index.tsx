import { NextPage } from 'next'
import Link from 'next/link'
import { about } from '../constants/pages'

const HomePage: NextPage = () => {
    return (
        <div>
            <h1>Hello World !</h1>
            <Link href={about.href}>
                <a title='Page about'>about</a>
            </Link>
        </div >
    )
}

export default HomePage