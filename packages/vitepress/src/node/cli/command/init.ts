import { Parser, nunjucks, type ParserOptions } from '@ephemeras/parser'
import { resolve } from 'node:path'
import ora from 'ora'
import { fileURLToPath } from 'node:url'
import { INIT_PROMPTS } from '../prompts'
import { answerPrompts, setNpmScript, runCmd } from '../utils'
import TEXT from '../locales/text'

export type InitData = {
  title: string
  slogan: string
  repo: string
}
export async function init(data: InitData) {
  const parser = new Parser({
    source: resolve(fileURLToPath(import.meta.url), '../files'),
    destination: process.cwd(),
    plugins: [nunjucks(data || {})],
    relativize: true,
    overwrite: true
  })

  return parser.build()
}

export default async function () {
  console.log(TEXT.TITLE_INPUT_INFORMATION)
  const { title, slogan, repo } = await answerPrompts(INIT_PROMPTS)

  console.log()
  console.log(TEXT.TITLE_CREATE_DOCUMENTS)

  const { dest } = await init({
    title,
    slogan,
    repo
  })

  console.log(dest.map(i => `📃 create ${i}`).join('\n'))

  console.log()
  console.log(TEXT.TITLE_INSTALL_DEPENDENCIES)
  await setNpmScript('dev', 'vitepress dev --port 28802')
  await setNpmScript('build', 'vitepress build')
  await setNpmScript('preview', 'vitepress preview')

  const spinner = ora('start install dependencies').start()
  await runCmd('pnpm', [
    'add',
    '-D',
    '@white-block/vitepress',
    'unocss',
    'vitepress'
  ])
  spinner.succeed('successfully install dependencies')

  console.log()
  console.log(TEXT.TIP_SUCCESS_ADD_DOCS)
}
