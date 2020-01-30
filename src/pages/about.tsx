import { NextPage } from 'next'
import Link from 'next/link'
import { home } from '../constants/pages'

const AboutPage: NextPage = () => {
    return (
        <div>
            <h1>About page</h1>
            <Link href={home.href}>
                <a>Home</a>
            </Link>
        </div>
    )
}

export default AboutPage