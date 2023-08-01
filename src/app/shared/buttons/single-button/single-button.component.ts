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
  @Input() public instruction!: SingleButtonIns
  @Output() private setStyle = new EventEmitter<SingleButtonSetting>()

  public emitSetStyle() {
    this.setStyle.emit(this.instruction.setting)
  }
}
