import StyleSetting from '../interface/styleSetting.interface'

export interface SingleButtonIns {
  icon: string
  styleSetting: StyleSetting
}

export const singleButtonsIns: SingleButtonIns[] = [
  {
    icon: 'bold',
    styleSetting: {
      service: 'setPlainStyle',
      value: 'bold',
      revert: 'normal',
      style: 'fontWeight',
    },
  },
  {
    icon: 'italic',
    styleSetting: {
      service: 'setPlainStyle',
      value: 'italic',
      revert: 'normal',
      style: 'fontStyle',
    },
  },
]
