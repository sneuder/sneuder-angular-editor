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
      values: [
        { value: '1.0', content: '1.0' },
        { value: '1.5', content: '1.5' },
        { value: '2.0', content: '2.0' },
        { value: '2.5', content: '2.5' },
        { value: '3.0', content: '3.0' },
      ],
      value: '1.0',
      style: 'line-height',
      service: 'setPlainStyle',
    },
  },
  {
    icon: 'fas fa-tint',
    type: TextEditorGroupType.TextFormatting,
    subType: TextFormattingSubType.TextColor,
    component: ModalButtonComponent,
    setting: {
      values: [{ value: '1.0', content: '1.0' }],
      value: '1.0',
      style: 'line-height',
      service: 'setPlainStyle',
    },
  },
]
