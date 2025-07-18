import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server : {
  //   proxy : {
  //     '/next' : {
  //       target : 'http://localhost:3100'
  //     }
  //   }
  // }
  // server : {
  //   proxy : {
  //     '/next' : 'http://localhost:3100'
  //   }
  // }
})
