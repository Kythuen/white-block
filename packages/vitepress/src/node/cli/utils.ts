import prompts, { PromptObject } from 'prompts'
import { TEXT_OPERATION_CANCEL } from './constant'

export function answerPrompts(questions: PromptObject[]) {
  return prompts(questions, {
    onCancel: () => {
      console.log()
      console.log(TEXT_OPERATION_CANCEL)
      console.log()
      process.exit(0)
    }
  })
}
