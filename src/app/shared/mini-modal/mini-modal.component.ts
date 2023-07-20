import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-mini-modal',
  templateUrl: './mini-modal.component.html',
  styleUrls: ['./mini-modal.component.scss'],
})
export class MiniModalComponent {
  @Input() public modalState = false
  @Output() public modalStateOutput = new EventEmitter()
  @Output() public stopSetTimeOutPut = new EventEmitter()

  public emitModalState() {
    this.modalStateOutput.emit()
  }

  public stopSetTimeOut() {
    this.stopSetTimeOutPut.emit()
  }
}
