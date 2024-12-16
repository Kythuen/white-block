import prompts, { PromptObject } from 'prompts'
import TEXT from '../locales/text'
import { promisify } from 'node:util'
import { execFile } from 'node:child_process'

export async function prettifyOutput(fn: Function, ...args: any) {
  console.log()
  if (['AsyncFunction', 'Promise'].includes(fn.constructor.name)) {
    await fn(...args)
  } else {
    fn(...args)
  }
  console.log()
}

export function answerPrompts(questions: PromptObject[]) {
  return prompts(questions, {
    onCancel: () => {
      prettifyOutput(() => {
        console.log(TEXT.TIP_CANCEL_OPERATION)
      })
      process.exit(0)
    }
  })
}

const asyncExecFile = promisify(execFile)
export async function setNpmScript(name: string, script: string) {
  return asyncExecFile('npm', ['pkg', 'set', `scripts.${name}=${script}`])
}
export async function runCmd(cmd: string, args: string[]) {
  return asyncExecFile(cmd, args)
}
