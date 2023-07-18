import { EditorTextService } from '../services/editor-text/editor-text.service'

interface StyleSetting {
  service: keyof EditorTextService
  value: string
  revert: string
  style: string
}

export default StyleSetting