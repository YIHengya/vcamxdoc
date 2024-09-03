import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: '无界直播',
  description: '无界直播使用教程',

  theme: defaultTheme({
    logo: 'https://shop.vcamx.com/favicon.ico',

    navbar: ['/', '/get-started'],
  }),

  bundler: viteBundler(),
})
