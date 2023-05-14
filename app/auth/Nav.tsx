import Link from 'next/link'

export default async function Nav() {
    return (
        <nav className=''>
            <Link href={"/"}>
                <h1>send it</h1>
            </Link>
        </nav>
    )
}