import { Parser, nunjucks } from '@ephemeras/parser'
import { resolve } from 'node:path'
import ora from 'ora'
import { fileURLToPath } from 'node:url'
import { INIT_PROMPTS } from '../prompts'
import { answerPrompts, setPkg, runCmd, getRepoInfo } from '../utils'
import TEXT from '../locales/text'

export type InitData = {
  title: string
  slogan: string
  repo: string
  user: string
}
export async function init(data: InitData) {
  const parser = new Parser({
    source: resolve(fileURLToPath(import.meta.url), '../../../../files'),
    destination: process.cwd(),
    plugins: [nunjucks(data || {})],
    relativize: true,
    overwrite: true
  })

  return parser.build()
}

export default async function () {
  console.log(TEXT.TITLE_INPUT_INFORMATION)

  const answers: any = await answerPrompts(INIT_PROMPTS)

  const { repo, user } = getRepoInfo(answers.repo) || 'ephemeras'

  console.log()
  console.log(TEXT.TITLE_CREATE_DOCUMENTS)

  const { dest } = await init({
    ...answers,
    repo,
    user
  })

  console.log(dest.map(i => `📃 create ${i}`).join('\n'))

  console.log()
  console.log(TEXT.TITLE_INSTALL_DEPENDENCIES)
  await setPkg('scripts.dev', 'vitepress dev --port 28802')
  await setPkg('scripts.build', 'vitepress build')
  await setPkg('scripts.preview', 'vitepress preview')
  await setPkg('type', 'module')

  const spinner = ora('start install dependencies').start()
  await runCmd('pnpm', [
    'add',
    '-D',
    '@white-block/vitepress',
    'unocss',
    'vite',
    'vitepress'
  ])
  spinner.succeed('successfully install dependencies')

  console.log()
  console.log(TEXT.TIP_SUCCESS_ADD_DOCS)
}
