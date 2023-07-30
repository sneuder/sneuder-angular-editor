import { Injectable } from '@angular/core'

import { StoreService } from '../store/store.service'

import { singleButtonsIns } from 'src/app/instructions/single-button.ins'
import SetUpSetting, { SetUpWorkSpaceDev } from 'src/app/interface/set-up.interface'

@Injectable({
  providedIn: 'root',
})
export class SetUpService {
  private groupToolbarIns = [...singleButtonsIns]

  private setUpSetting: SetUpSetting = {
    editorSettings: {},
    toolBarButtons: [],
  }

  private setUpWorkSpaceDev: SetUpWorkSpaceDev = {
    toolBarButtons: {
      TextFormatting: [],
      TextAlignment: [],
      Lists: [],
    },
    toolBarButtonsSelected: {},
  }

  constructor(private storeService: StoreService) {}

  public setUp() {
    this.setDefaultSetUp()
  }

  private setDefaultSetUp() {
    if (this.setUpWorkSpaceDev.toolBarButtons === undefined) return

    this.groupToolbarIns.forEach((button) => {
      if (this.setUpWorkSpaceDev.toolBarButtons === undefined) return

      const indexType = button.type as keyof typeof this.setUpWorkSpaceDev.toolBarButtons
      this.setUpWorkSpaceDev.toolBarButtons[indexType].push(button)
    })

    this.concatButtons()
    this.saveSetUp()
  }

  private setDevSetUp() {}

  private concatButtons() {
    if (this.setUpWorkSpaceDev.toolBarButtons === undefined) return

    const toolBarButtons = Object.values(this.setUpWorkSpaceDev.toolBarButtons).flat()
    this.setUpSetting.toolBarButtons = toolBarButtons
  }

  private saveSetUp() {
    this.storeService.saveEditorSettings(this.setUpSetting)
  }
}
