import React from "react";
import { Link } from "react-router-dom";
import MarkdownPreview from '@uiw/react-markdown-preview';
import fileSoal from '../assets/markdown/soalke1.md'

export default function DaftarSoalNew() {

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
              <Link to="/logic-two">Logic 2</Link>
              </li>
              <li className="p-4 underline">
                <Link to="/guide">Guide</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <div className="container max-w-3xl p-4">
          <h1 className="py-5">List Task:</h1>
          <MarkdownPreview source={fileSoal} className="bg-white text-cyan-900" />
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
