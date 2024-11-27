import type { PromptObject } from 'prompts'

export const INIT_PROMPTS: PromptObject[] = [
  {
    name: 'title',
    type: 'text',
    message: 'please input site title',
    validate: (value: string) => {
      if (!value) return 'please input site title'
      return true
    }
  },
  {
    name: 'slogan',
    type: 'text',
    message: 'please input site slogan',
    validate: (value: string) => {
      if (!value) return 'please input site slogan'
      return true
    }
  },
  {
    name: 'repo',
    type: 'text',
    message: 'please input git repo',
    validate: (value: string) => {
      if (!value) return 'please input git repo'
      return true
    }
  }
]
