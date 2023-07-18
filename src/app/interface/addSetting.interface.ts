import { EditorTextService } from '../services/editor-text/editor-text.service'

interface AddSetting {
  service: keyof EditorTextService
  insert: string
}

export default AddSetting
