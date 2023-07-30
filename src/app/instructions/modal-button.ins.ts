import { SingleButtonComponent } from '../shared/buttons/single-button/single-button.component'

export interface ModalButtonIns {
  icon: string
  component: any
  setting: {
    values: {
      value: string
      content: string
    }[]
    style: string
    service: string
  }
}

export const modalButtonsIns: ModalButtonIns[] = [
  // {
  //   icon: 'fas fa-font',
  //   setting: {},
  // },
  {
    icon: 'fas fa-text-height',
    component: SingleButtonComponent,
    setting: {
      values: [{ value: '1.0', content: '1.0' }],
      style: 'line-height',
      service: 'test',
    },
  },
  {
    icon: 'fas fa-tint',
    component: SingleButtonComponent,
    setting: {
      values: [{ value: '1.0', content: '1.0' }],
      style: 'line-height',
      service: 'test',
    },
  },
  // {
  //   icon: 'fas fa-table',
  //   setting: {},
  // },
]
