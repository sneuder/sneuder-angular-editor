import { ModalButtonComponent } from 'src/app/shared/buttons/modal-button/modal-button.component'
import { TextEditorGroupType, SubTypeGroup } from '../../interface/set-up.interface'

interface ModalButtonIns {
  icon: string
  type: TextEditorGroupType
  subType: SubTypeGroup
  component: typeof ModalButtonComponent
  setting: StyleModalSetting
}

export interface StyleModalSetting {
  values: {
    value: string
    content: string
  }[]
  value: string
  style: string
  service: string
}

export default ModalButtonIns
