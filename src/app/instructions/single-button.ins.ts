import { SingleButtonComponent } from '../shared/buttons/single-button/single-button.component'
import SingleButtonIns from '../interface/instructions/single-button.interface'
import {
  TextEditorGroupType,
  TextFormattingSubType,
  TextAlignmentSubType,
  ListsSubType,
} from '../interface/set-up.interface'

export const singleButtonsIns: SingleButtonIns[] = [
  {
    icon: 'fas fa-bold',
    type: TextEditorGroupType.TextFormatting,
    subType: TextFormattingSubType.Bold,
    component: SingleButtonComponent,
    setting: {
      service: 'setPlainStyle',
      value: 'bold',
      revert: 'normal',
      style: 'fontWeight',
    },
  },
  {
    icon: 'fas fa-italic',
    type: TextEditorGroupType.TextFormatting,
    subType: TextFormattingSubType.Italic,
    component: SingleButtonComponent,
    setting: {
      service: 'setPlainStyle',
      value: 'italic',
      revert: 'normal',
      style: 'fontStyle',
    },
  },
  {
    icon: 'fas fa-underline',
    type: TextEditorGroupType.TextFormatting,
    subType: TextFormattingSubType.Underline,
    component: SingleButtonComponent,
    setting: {
      service: 'setPlainStyle',
      value: 'underline',
      revert: 'none',
      style: 'textDecoration',
    },
  },
  {
    icon: 'fas fa-align-left',
    type: TextEditorGroupType.TextAlignment,
    subType: TextAlignmentSubType.LeftAlign,
    component: SingleButtonComponent,
    setting: {
      service: 'setPlainStyle',
      value: 'left',
      revert: 'initial',
      style: 'textAlign',
    },
  },
  {
    icon: 'fas fa-align-right',
    type: TextEditorGroupType.TextAlignment,
    subType: TextAlignmentSubType.RightAlign,
    component: SingleButtonComponent,
    setting: {
      service: 'setPlainStyle',
      value: 'right',
      revert: 'initial',
      style: 'textAlign',
    },
  },
  {
    icon: 'fas fa-align-center',
    type: TextEditorGroupType.TextAlignment,
    subType: TextAlignmentSubType.CenterAlign,
    component: SingleButtonComponent,
    setting: {
      service: 'setPlainStyle',
      value: 'center',
      revert: 'initial',
      style: 'textAlign',
    },
  },
  {
    icon: 'fas fa-align-justify',
    type: TextEditorGroupType.TextAlignment,
    subType: TextAlignmentSubType.Justify,
    component: SingleButtonComponent,
    setting: {
      service: 'setPlainStyle',
      value: 'justify',
      revert: 'initial',
      style: 'textAlign',
    },
  },
  // {
  //   icon: 'fas fa-highlighter',
  //   component: SingleButtonComponent,
  //   setting: {
  //     service: 'setPlainStyle',
  //     value: '#F1E740',
  //     revert: 'none',
  //     style: 'backgroundColor',
  //   },
  // },
  {
    icon: 'fas fa-list-ul',
    type: TextEditorGroupType.Lists,
    subType: ListsSubType.UnorderedList,
    component: SingleButtonComponent,
    setting: {
      service: 'addElement',
      insert: '<ul style="list-style-position: inside;"><li></li></ul>',
    },
  },
  {
    icon: 'fas fa-list-ol',
    type: TextEditorGroupType.Lists,
    subType: ListsSubType.OrderedList,
    component: SingleButtonComponent,
    setting: {
      service: 'addElement',
      insert: '<ol style="list-style-position: inside;"><li></li></ol>',
    },
  },
  // work on this when users select words to add it
  // {
  //   icon: 'fas fa-superscript',
  //   setting: {
  //     service: 'addElement',
  //     insert: '<sup>superscript</sup>',
  //   },
  // },
  // {
  //   icon: 'fas fa-subscript',
  //   setting: {
  //     service: 'addElement',
  //     insert: '<sub>superscript</sub>',
  //   },
  // },
]
