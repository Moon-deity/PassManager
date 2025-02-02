import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, form])
    );
    console.log([...passwordArray, form]);
    setForm({ site: "", username: "", password: "" });
  };

  const copyText = (text)=> {
    navigator.clipboard.writeText(text)
    toast("Copied to clipboard", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    console.log(text)
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* this is background */}
      <div className="fixed top-0 bottom-0 inset-0 -z-10 h-full w-full bg-purple-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      {/* this is title with logo */}
      <div className="title flex flex-col justify-center py-6 text-center">
        <div className="logo">
          <span className="text-violet-900 text-4xl font-bold">&lt;/Pass</span>
          <span className="text-black text-4xl font-bold">Manager&gt;</span>
        </div>
        <p className="text-black text-xl">Your own password manager</p>
      </div>
      {/* this is the main manager */}
      <div className="container flex flex-col gap-6 mx-auto max-w-4xl">
        <input
          className="px-2 text-lg text-gray-700 border-2 rounded-full border-violet-900 bg-white"
          type="text"
          placeholder="Website name"
          name="site"
          value={form.site}
          onChange={handleChange}
        />
        <div className="flex gap-4">
          <input
            className="px-2 text-lg text-gray-700 border-2 rounded-full border-violet-900 bg-white w-full"
            type="text"
            placeholder="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <input
            className="px-2 text-lg text-gray-700 border-2 rounded-full border-violet-900 bg-white w-full"
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          className="flex justify-center gap-2 hover:bg-violet-700 cursor-pointer items-center w-fit bg-violet-900 rounded-full px-4 py-2 text-white mx-auto font-bold"
          onClick={savePassword}
        >
          <span className="material-symbols-outlined button-icon">
            playlist_add
          </span>
          Add password
        </button>

        <div className="passwords">
          <h2 className="text-xl font-bold">Your passwords</h2>
          {passwordArray.length === 0 && <div>No Passwords to show</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full overflow-hidden rounded-xl my-4">
              <thead className="bg-violet-900 text-white">
                <tr>
                  <th className="py-1">Website</th>
                  <th className="py-1">Username</th>
                  <th className="py-1">Password</th>
                </tr>
              </thead>
              <tbody className="bg-violet-200 text-center">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-1">
                        {item.site}
                        <span
                          className="material-symbols-outlined copy-icon cursor-pointer px-2"
                          onClick={() => {
                            copyText(item.site);
                          }}
                        >
                          content_copy
                        </span>
                      </td>
                      <td className="py-1">
                        {item.username}
                        <span
                          className="material-symbols-outlined copy-icon cursor-pointer px-2"
                          onClick={() => {
                            copyText(item.username);
                          }}
                        >
                          content_copy
                        </span>
                      </td>
                      <td className="py-1" type="password">
                        {item.password}
                        <span
                          className="material-symbols-outlined copy-icon cursor-pointer px-2"
                          onClick={() => {
                            copyText(item.password);
                          }}
                        >
                          content_copy
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
