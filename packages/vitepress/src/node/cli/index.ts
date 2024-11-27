#!/usr/bin/env node
import { cac } from 'cac'
import { INIT_PROMPTS } from './prompts'
import { TEXT_WELCOME_TIP } from './constant'
import { answerPrompts } from './utils'

async function run() {
  // 读取 process.cwd的package.json文件
  // 获取 name, description, version 等信息
  const cli = cac('wb-vitepress').version('0.0.0')

  cli.command('[root]').action(() => {
    cli.outputHelp()
  })

  cli.command('init').action(async () => {
    console.log(TEXT_WELCOME_TIP)

    const answer = await answerPrompts(INIT_PROMPTS)

    console.log(answer)
    // // 复制 template, 替换 name, description 等
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
