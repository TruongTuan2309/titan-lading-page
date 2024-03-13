import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from '@svgr/rollup'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  server: {
    port: 3000
  },
  envPrefix: 'ENV_'
})
