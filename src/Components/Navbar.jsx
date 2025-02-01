import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center h-14 text-white">
      <div className="logo">
        <span className="text-violet-900 text-2xl font-bold">&lt;/Pass</span>
        <span className="text-black text-2xl font-bold">Manager&gt;</span>
      </div>
      <ul className="flex text-xl text-black gap-12">
        <li>
          <a href="">Link 1</a>
        </li>
        <li>
          <a href="">Link 2</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar