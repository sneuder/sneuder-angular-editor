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
  // {
  //   icon: 'fas fa-tint',
  //   type: TextEditorGroupType.TextFormatting,
  //   subType: TextFormattingSubType.TextColor,
  //   component: ModalButtonComponent,
  //   setting: {
  //     values: [{ value: '1.0', content: '1.0' }],
  //     value: '1.0',
  //     style: 'line-height',
  //     service: 'setPlainStyle',
  //   },
  // },
  {
    icon: 'fas fa-font',
    type: TextEditorGroupType.TextFormatting,
    subType: TextFormattingSubType.FontFamily,
    component: ModalButtonComponent,
    setting: {
      values: [
        { value: 'Arial, sans-serif', content: 'Arial' },
        { value: 'Helvetica, sans-serif', content: 'Helvetica' },
        { value: 'Times New Roman, serif', content: 'Times New Roman' },
        { value: 'Georgia, serif', content: 'Georgia' },
        { value: 'Verdana, sans-serif', content: 'Verdana' },
        { value: 'Tahoma, sans-serif', content: 'Tahoma' },
        { value: 'Courier New, monospace', content: 'Courier New' },
        { value: 'Impact, sans-serif', content: 'Impact' },
      ],
      value: 'Arial',
      style: 'font-family',
      service: 'setPlainStyle',
    },
  },
]
