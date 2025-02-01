import React from "react";

const Adder = () => {
    return (
      <>
        {/* this is background */}
        <div class="absolute inset-0 -z-10 h-full w-full bg-purple-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        {/* this is title with logo */}
        <div className="title flex flex-col justify-center py-6 text-center">
          <div className="logo">
            <span className="text-violet-900 text-4xl font-bold">
              &lt;/Pass
            </span>
            <span className="text-black text-4xl font-bold">Manager&gt;</span>
          </div>
          <p className="text-black text-xl">Your own password manager</p>
        </div>
        {/* this is the main manager */}
        <div className="container flex flex-col gap-6 mx-auto max-w-4xl">
          <input className="px-2 text-lg text-gray-700 border-2 rounded-full border-violet-900 bg-white" type="text" placeholder="Website name"/>
          <div className="flex gap-4">
            <input className="px-2 text-lg text-gray-700 border-2 rounded-full border-violet-900 bg-white w-full" type="text" placeholder="Username"/>
            <input className="px-2 text-lg text-gray-700 border-2 rounded-full border-violet-900 bg-white w-full" type="password" placeholder="Password"/>
          </div>
          <button className="flex justify-center gap-2 hover:bg-violet-700 cursor-pointer items-center w-fit bg-purple-900 rounded-full px-4 py-2 text-white mx-auto"><span className="material-symbols-outlined">playlist_add</span>Add password</button>
        </div>
      </>
    );
};

export default Adder;
