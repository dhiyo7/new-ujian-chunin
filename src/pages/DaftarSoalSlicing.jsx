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
            className="w-full aspect-video"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F8q08EJImCqy8e3njkywRgz%2FBali-Travel%3Ftype%3Ddesign%26node-id%3D0-1%26mode%3Ddesign%26t%3DQ5Ll0Wd9lu4d7wh0-0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <br/>
          <h1 className="py-5">Slicing Halaman Berikut ini menggunakan salah satu farmework CSS:</h1>
          <iframe
            className="w-full aspect-video"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FvJM2OzQlOdbBOqqL3OZfyF%2FAuthed%25C2%25A0%25E2%2580%2593%25C2%25A0Authentication-UI-Design-%28Community%29%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3D3zy9tapRuMqMkqak-1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
           <br/>
          <h1 className="py-5">Slicing Halaman Berikut ini menggunakan React dan Tailwind CSS:</h1>
          <iframe
            className="w-full aspect-video"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FiKEsFxs1ILV0I54EtLWH5O%2FEpictetus-%25E2%2580%2593-Blog-UI-Design-%28Community%29%3Ftype%3Ddesign%26node-id%3D639%253A2%26mode%3Ddesign%26t%3DnkMWbRUl8lND8wCi-1"
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