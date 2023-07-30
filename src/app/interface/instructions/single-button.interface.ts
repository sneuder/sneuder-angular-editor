import { EditorTextService } from '../../services/editor-text/editor-text.service'
import { SingleButtonComponent } from 'src/app/shared/buttons/single-button/single-button.component'
import { TextEditorGroupType, SubTypeGroup } from '../set-up.interface'

interface SingleButtonIns {
  icon: string
  type: TextEditorGroupType
  subType: SubTypeGroup
  component: typeof SingleButtonComponent
  setting: SingleButtonSetting
}

export interface AddSetting {
  service: keyof EditorTextService
  insert: string
}

export interface StyleSetting {
  service: keyof EditorTextService
  value: string
  revert: string
  style: string
}

export type SingleButtonSetting = StyleSetting | AddSetting

export default SingleButtonIns
