import StyleSetting from '../interface/styleSetting.interface'
import AddSetting from '../interface/addSetting.interface'

export interface SingleButtonIns {
  icon: string
  setting: StyleSetting | AddSetting
}

export const singleButtonsIns: SingleButtonIns[] = [
  {
    icon: 'fas fa-bold',
    setting: {
      service: 'setPlainStyle',
      value: 'bold',
      revert: 'normal',
      style: 'fontWeight',
    },
  },
  {
    icon: 'fas fa-italic',
    setting: {
      service: 'setPlainStyle',
      value: 'italic',
      revert: 'normal',
      style: 'fontStyle',
    },
  },
  {
    icon: 'fas fa-underline',
    setting: {
      service: 'setPlainStyle',
      value: 'underline',
      revert: 'none',
      style: 'textDecoration',
    },
  },
  {
    icon: 'fas fa-align-left',
    setting: {
      service: 'setPlainStyle',
      value: 'left',
      revert: 'initial',
      style: 'textAlign',
    },
  },
  {
    icon: 'fas fa-align-right',
    setting: {
      service: 'setPlainStyle',
      value: 'right',
      revert: 'initial',
      style: 'textAlign',
    },
  },
  {
    icon: 'fas fa-align-center',
    setting: {
      service: 'setPlainStyle',
      value: 'center',
      revert: 'initial',
      style: 'textAlign',
    },
  },
  {
    icon: 'fas fa-align-justify',
    setting: {
      service: 'setPlainStyle',
      value: 'justify',
      revert: 'initial',
      style: 'textAlign',
    },
  },
  {
    icon: 'fas fa-highlighter',
    setting: {
      service: 'setPlainStyle',
      value: '#F1E740',
      revert: 'none',
      style: 'backgroundColor',
    },
  },
  {
    icon: 'fas fa-list-ul',
    setting: {
      service: 'addElement',
      insert: '<ul style="list-style-position: inside;"><li></li></ul>',
    },
  },
  {
    icon: 'fas fa-list-ol',
    setting: {
      service: 'addElement',
      insert: '<ol style="list-style-position: inside;"><li></li></ol>',
    },
  },
  // work on this when users select words to add it
  {
    icon: 'fas fa-superscript',
    setting: {
      service: 'addElement',
      insert: '<sup>superscript</sup>',
    },
  },
  {
    icon: 'fas fa-subscript',
    setting: {
      service: 'addElement',
      insert: '<sub>superscript</sub>',
    },
  },
]
