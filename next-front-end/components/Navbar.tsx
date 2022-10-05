import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/motorpoint.png" alt="motorpoint" width={128} height={100} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/motorpoint-users"><a>Users</a></Link>
        </nav>
    );
}

export default Navbar;