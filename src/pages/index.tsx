import { NextPage } from 'next'
import Link from 'next/link'
import useSWR from 'swr'
import User from '../components/User'
import { modify_counter } from '../constants/pages'
import Counter from '../stateful-components/Counter'

//HOWTO: Fetch data with SWR 
//Not mandatory: Run a backend and configure access to it in SWR (cf: README), otherwise the query fails 
const DynamicComponent: React.FC = () => {
    const { data, error } = useSWR('fail')

    if (error) return <div>{error.message}</div>
    if (!data) return <div>loading...</div>
    return <div>hello {data.name}!</div>
}

const HomePage: NextPage = () => {
    return (
        <div>
            <DynamicComponent />
            <User name="Alexandre" />
            <User name="Mikael" />
            <h1>Click here</h1>
            <p>Click on the following link to modify the counter value</p>
            <Link href={modify_counter.href}>
                <a title='Page about'>Modify counter</a>
            </Link>
            <Counter />
        </div >
    )
}

export default HomePage