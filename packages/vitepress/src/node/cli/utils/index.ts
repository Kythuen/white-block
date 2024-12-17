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
export async function setPkg(field: string, script: string) {
  return asyncExecFile('npm', ['pkg', 'set', `${field}=${script}`])
}
export async function runCmd(cmd: string, args: string[]) {
  return asyncExecFile(cmd, args)
}

export function getRepoInfo(url: string) {
  const trimmedUrl = url.replace(/\/+$/, '')

  const gitMatch = trimmedUrl.match(
    /(?:https?:\/\/|git@)([^/:]+)[:/](.*?)(?:\.git)?$/i
  )

  if (gitMatch && gitMatch[2]) {
    const parts = gitMatch[2].split('/')
    if (parts.length >= 2) {
      return {
        user: parts[0],
        repo: parts.slice(1).join('/')
      }
    }
  }

  return { user: '', repo: '' }
}
