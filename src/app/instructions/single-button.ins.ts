import StyleSetting from '../interface/styleSetting.interface'

export interface SingleButtonIns {
  icon: string
  styleSetting: StyleSetting
}

export const singleButtonsIns: SingleButtonIns[] = [
  {
    icon: 'fas fa-bold',
    styleSetting: {
      service: 'setPlainStyle',
      value: 'bold',
      revert: 'normal',
      style: 'fontWeight',
    },
  },
  {
    icon: 'fas fa-italic',
    styleSetting: {
      service: 'setPlainStyle',
      value: 'italic',
      revert: 'normal',
      style: 'fontStyle',
    },
  },
  {
    icon: 'fas fa-underline',
    styleSetting: {
      service: 'setPlainStyle',
      value: 'underline',
      revert: 'none',
      style: 'textDecoration',
    },
  },
  {
    icon: 'fas fa-align-left',
    styleSetting: {
      service: 'setPlainStyle',
      value: 'left',
      revert: 'initial',
      style: 'textAlign',
    },
  },
  {
    icon: 'fas fa-align-right',
    styleSetting: {
      service: 'setPlainStyle',
      value: 'right',
      revert: 'initial',
      style: 'textAlign',
    },
  },
  {
    icon: 'fas fa-align-center',
    styleSetting: {
      service: 'setPlainStyle',
      value: 'center',
      revert: 'initial',
      style: 'textAlign',
    },
  },
  {
    icon: 'fas fa-align-justify',
    styleSetting: {
      service: 'setPlainStyle',
      value: 'justify',
      revert: 'initial',
      style: 'textAlign',
    },
  },
]
