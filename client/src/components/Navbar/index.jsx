import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-[#2d3e50] text-white px-10 py-10 mb-4 flex flex-col md:flex-row justify-between items-center w-[100vw]">
            <Link to="/">
                <h1 className="text-2xl">Character Generator</h1>
            </Link>
            <div className='flex justify-between items-center mt-2 md:mt-0'>
                <Link to="/about" className="underline text-white hover:text-blue-600 mr-4">About</Link>
                <Link to="/creators" className="underline text-white hover:text-blue-600 mr-4">Creators</Link>
                <Link to="/" className="underline text-white hover:text-blue-600 mr-4">Mini Game</Link>
                <Link to="/" className="underline text-white hover:text-blue-600">Something else</Link>
            </div>
        </nav>
    )
}

export default Navbar;

{/* <div className="bg-primary text-light mb-4 py-3">
        <div className="container flex justify-between align-center">
          
          <p className="m-0">It's coding time</p>
        </div>
      </div> */}