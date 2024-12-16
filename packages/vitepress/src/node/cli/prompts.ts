import type { PromptObject } from 'prompts'
import TEXT from './locales/text'

export const INIT_PROMPTS: PromptObject[] = [
  {
    name: 'title',
    type: 'text',
    message: TEXT.PROMPT_SITE_TITLE,
    validate: (value: string) => {
      if (!value) return TEXT.RULE_SITE_TITLE
      if (value.length < 3) return TEXT.RULE_SITE_TITLE_LENGTH
      return true
    }
  },
  {
    name: 'slogan',
    type: 'text',
    message: TEXT.PROMPT_SITE_SLOGAN,
    validate: (value: string) => {
      if (!value) return TEXT.RULE_SITE_SLOGAN
      if (value.length < 3) return TEXT.RULE_SITE_SLOGAN_LENGTH
      return true
    }
  },
  {
    name: 'repo',
    type: 'text',
    message: TEXT.PROMPT_GET_REPO,
    validate: (value: string) => {
      if (!value) return TEXT.RULE_GET_REPO
      if (value.length < 3) return TEXT.RULE_GET_REPO_LENGTH
      return true
    }
  }
]
