import { Component, Input, Output, EventEmitter } from '@angular/core'
import { SingleButtonIns } from 'src/app/instructions/single-button.ins'

import StyleSetting from 'src/app/interface/styleSetting.interface'
import AddSetting from 'src/app/interface/addSetting.interface'

@Component({
  selector: 'app-single-button',
  templateUrl: './single-button.component.html',
  styleUrls: ['./single-button.component.scss'],
})
export class SingleButtonComponent {
  @Input() instruction!: SingleButtonIns
  @Output() setStyle = new EventEmitter<StyleSetting | AddSetting>()

  emitSetStyle() {
    this.setStyle.emit(this.instruction.setting)
  }
}
