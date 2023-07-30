import { Component, Input, Output, EventEmitter } from '@angular/core'

import SingleButtonIns, {
  SingleButtonSetting,
} from 'src/app/interface/instructions/single-button.interface'

@Component({
  selector: 'app-single-button',
  templateUrl: './single-button.component.html',
  styleUrls: ['./single-button.component.scss'],
})
export class SingleButtonComponent {
  @Input() instruction!: SingleButtonIns
  @Output() setStyle = new EventEmitter<SingleButtonSetting>()

  emitSetStyle() {
    this.setStyle.emit(this.instruction.setting)
  }
}
