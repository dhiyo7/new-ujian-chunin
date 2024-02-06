import React from "react";
import { Link } from "react-router-dom";


const DaftarSoal = () => {

  return (
    <div className="relative min-h-screen pb-20 font-mono text-cyan-900">
      <div className="w-full bg-gray-100 flex justify-center h-20 text-cyan-900">
        <div className="container max-w-3xl flex justify-between h-20 items-center">
          <div className="p-4 underline">
            <Link to="/">Home</Link>
          </div>
          <nav>
            <ul className="flex justify-start">
              <li className="p-4 underline">
                <Link to="/guide">Guide</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <div className="container max-w-3xl p-4">
          <h1 className="py-5">Slicing Halaman Berikut ini menggunakan HTML dan CSS:</h1>
          <iframe
            width="860"
            height="484"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F8q08EJImCqy8e3njkywRgz%2FBali-Travel%3Ftype%3Ddesign%26node-id%3D0-1%26mode%3Ddesign%26t%3DQ5Ll0Wd9lu4d7wh0-0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <footer className="w-full bg-gray-100 flex justify-center h-20 text-cyan-900 absolute bottom-0">
        <div className="container max-w-3xl flex justify-between h-20 items-center">
          <div className="p-4">© All rights reserved.</div>
          <nav>
            <ul className="flex justify-start">
              <li className="p-4 underline">
                <a href="https://github.com/dhiyo7">GitHub</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default DaftarSoal;