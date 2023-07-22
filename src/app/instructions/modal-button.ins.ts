export interface ModalButtonIns {
  icon: string
  setting: {
    component: string
  }
}

export const modalButtonsIns: ModalButtonIns[] = [
  {
    icon: 'fas fa-table',
    setting: {
      component: 'sas',
    },
  },
]
