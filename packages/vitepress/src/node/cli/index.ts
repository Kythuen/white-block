#!/usr/bin/env node
import { cac } from 'cac'
import TEXT from './locales/text'
import init from './command/init'
import { prettifyOutput } from './utils'
import { version } from '../../../package.json'

async function run() {
  // 读取 process.cwd的package.json文件
  // 获取 name, description, version 等信息
  const cli = cac('wb-vitepress').version(version)

  cli.command('[root]').action(() => {
    prettifyOutput(() => cli.outputHelp())
  })

  cli.command('init').action(async () => {
    prettifyOutput(async () => {
      console.log(TEXT.TIP_WELCOME)
      console.log()
      await init()
    })

    // // 安装配置 unocss, 增加脚本
    // const p = spawn('npx', ['vitepress', 'init'], {
    //   stdio: 'inherit'
    // })

    // p.on('close', code => {
    //   //
    // })

    // p.on('error', error => {
    //   console.error(error)
    // })
  })

  cli.help(() => {})

  cli.parse()
}

run()
