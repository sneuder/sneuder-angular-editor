import { Injectable } from '@angular/core'

import { StoreService } from '../store/store.service'

import { singleButtonsIns } from 'src/app/instructions/single-button.ins'
import { modalButtonsIns } from 'src/app/instructions/modal-button.ins'
import { EditorSettingsIns } from 'src/app/interface/set-up.interface'
import SetUpSetting, {
  SetUpWorkSpaceDev,
  SetUpInputDev,
  SetUpInputDevOptional,
  SubTypeGroup,
} from 'src/app/interface/set-up.interface'

@Injectable({
  providedIn: 'root',
})
export class SetUpService {
  private groupToolbarIns = [...singleButtonsIns, ...modalButtonsIns] as EditorSettingsIns

  private setUpSetting: SetUpSetting = {
    editorSettings: {},
    toolBarButtons: [],
  }

  // what the dev wants to setting
  private setUpInputDev: SetUpInputDev = {
    editorSettings: {},
    toolBarButtonsSelected: {
      TextFormatting: [],
      TextAlignment: [],
      Lists: [],
    },
  }

  // section to manage the buttons
  private setUpWorkSpaceDev: SetUpWorkSpaceDev = {
    toolBarButtons: {
      TextFormatting: [],
      TextAlignment: [],
      Lists: [],
    },
  }

  constructor(private storeService: StoreService) {}

  public setUp(setUpDev?: SetUpInputDevOptional) {
    if (setUpDev) this.setSetUpEditor(setUpDev)

    if (setUpDev?.toolBarButtonsSelected) {
      this.setDevSetUp()
    } else {
      this.setDefaultSetUp()
    }

    this.concatButtons()
    this.saveSetUp()
  }

  private setDefaultSetUp() {
    this.groupToolbarIns.forEach((button) => {
      const indexType = button.type as keyof typeof this.setUpWorkSpaceDev.toolBarButtons
      this.setUpWorkSpaceDev.toolBarButtons[indexType].push(button)
    })
  }

  private setDevSetUp() {
    this.groupToolbarIns.forEach((button) => {
      const checkType = button.type as keyof typeof this.setUpInputDev.toolBarButtonsSelected
      const checkSubType = button.subType

      const subTypeGroup = this.setUpInputDev.toolBarButtonsSelected[checkType] as SubTypeGroup[]

      if (subTypeGroup.includes(checkSubType)) {
        this.setUpWorkSpaceDev.toolBarButtons[checkType].push(button)
      }
    })
  }

  private setSetUpEditor(setUpDev: SetUpInputDevOptional) {
    if (setUpDev.editorSettings) {
      this.setUpSetting.editorSettings = {
        ...this.setUpSetting.editorSettings,
        ...setUpDev.editorSettings,
      }
    }

    if (setUpDev.toolBarButtonsSelected) {
      this.setUpInputDev.toolBarButtonsSelected = {
        ...this.setUpInputDev.toolBarButtonsSelected,
        ...setUpDev.toolBarButtonsSelected,
      }
    }
  }

  private concatButtons() {
    if (this.setUpWorkSpaceDev.toolBarButtons === undefined) return

    const toolBarButtons = Object.values(this.setUpWorkSpaceDev.toolBarButtons).flat()
    this.setUpSetting.toolBarButtons = toolBarButtons
  }

  private saveSetUp() {
    this.storeService.saveEditorSettings(this.setUpSetting)
  }
}
