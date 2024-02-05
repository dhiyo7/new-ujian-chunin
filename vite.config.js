import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import MarkdownPreview from 'vite-plugin-markdown-preview'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    MarkdownPreview(),
    {
      name: "markdown-loader",
      transform(code, id) {
        if (id.slice(-3) === ".md") {
          // For .md files, get the raw content
          return `export default ${JSON.stringify(code)};`;
        }
      }
    }
  ],
  // assetsInclude: ['**/*.md']
})
