import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center h-14 text-white backdrop-blur-xs sticky top-0 w-full">
      <div className="logo">
        <span className="text-violet-900 text-2xl font-bold">&lt;/Pass</span>
        <span className="text-black text-2xl font-bold">Manager&gt;</span>
      </div>
      <ul className="flex text-xl text-black gap-12">
        <li>
          <a href="https://instagram.com/harshit_030207" target='blank'>
            <img src="instagram.svg" alt="instagram" className='h-8'/>
          </a>
        </li>
        <li>
          <a href="https://github.com/Moon-deity" target='blank'>
            <img src="github.svg" alt="github" className='h-8'/>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
