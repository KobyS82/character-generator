import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-[#2d3e50] text-white px-10 py-10 mb-4 flex flex-col md:flex-row justify-between items-center w-[100vw]">
            <Link to="/">
                <h1 className="text-2xl">Character Generator</h1>
            </Link>
            <div className='flex justify-between items-center mt-2 md:mt-0'>
                <Link to="/about" className="underline text-white hover:text-blue-600 mr-4">About Us</Link>
                <Link to="/spells" className="underline text-white hover:text-blue-600 mr-4">Spells</Link>
                <Link to="/game" className="underline text-white hover:text-blue-600 mr-4">Mini Game</Link>
                <Link to="/contact" className="underline text-white hover:text-blue-600 mr-4">Contact</Link>
                <Link to="/login" className="underline text-white hover:text-blue-600">Login</Link>
            </div>
        </nav>
    )
}

export default Navbar;