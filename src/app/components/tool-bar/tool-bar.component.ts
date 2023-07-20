import { Component } from '@angular/core'

import { EditorTextService } from 'src/app/services/editor-text/editor-text.service'

import { singleButtonsIns } from 'src/app/instructions/single-button.ins'

import StyleSetting from 'src/app/interface/styleSetting.interface'
import AddSetting from 'src/app/interface/addSetting.interface'

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent {
  public singleButtonsIns = singleButtonsIns

  constructor(public editorTextService: EditorTextService) {}

  public setEditorStyles(setting: StyleSetting | AddSetting) {
    this.editorTextService[setting.service](setting as StyleSetting & AddSetting)
  }
}
