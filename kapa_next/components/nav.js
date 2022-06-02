import Link from "next/link";

const Nav = () =>{
    return(
        <nav
            className="
                flex
                flex-wrap
                justify-between
                w-full
                py-4
                md:py-0
                px-4
                text-lg
                text-gray-700
                bg-white
        ">
            <div>
                <ul
                    className="
                        pt-4
                        text-base text-gray-700
                        md:flex
                        md:justify-between
                        md:pt-0 space-x-2
                ">
                    <li>
                    <Link href="/">
                        <a className="md:p-2 py-2 block hover:text-purple-400">Home</a>
                    </Link>            
                    </li>
                    <li>
                    <Link href="/posts">
                        <a className="md:p-2 py-2 block hover:text-purple-400" href="#">Posts</a>
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;