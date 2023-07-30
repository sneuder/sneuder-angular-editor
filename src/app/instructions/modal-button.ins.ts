import { ModalButtonComponent } from '../shared/buttons/modal-button/modal-button.component'

import { TextEditorGroupType, TextFormattingSubType } from '../interface/set-up.interface'
import ModalButtonIns from '../interface/instructions/modal-button.interface'

export const modalButtonsIns: ModalButtonIns[] = [
  {
    icon: 'fas fa-text-height',
    type: TextEditorGroupType.TextFormatting,
    subType: TextFormattingSubType.FontHeight,
    component: ModalButtonComponent,
    setting: {
      values: [{ value: '1.0', content: '1.0' }],
      style: 'line-height',
      service: 'test',
    },
  },
  {
    icon: 'fas fa-tint',
    type: TextEditorGroupType.TextFormatting,
    subType: TextFormattingSubType.TextColor,
    component: ModalButtonComponent,
    setting: {
      values: [{ value: '1.0', content: '1.0' }],
      style: 'line-height',
      service: 'test',
    },
  },
]
