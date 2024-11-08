import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers'
import tailwindcss from "tailwindcss"
import legacy from '@vitejs/plugin-legacy'
import autoprefixer from "autoprefixer"
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['ios >= 9', 'android >= 4.2', '> 1%']
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 9899
  },
  resolve: {
    alias: {
      '~': "/src",
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  }
})
