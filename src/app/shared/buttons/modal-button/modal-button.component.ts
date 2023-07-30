import { Component, Input } from '@angular/core'
import ModalButtonIns from 'src/app/interface/instructions/modal-button.interface'

@Component({
  selector: 'app-modal-button',
  templateUrl: './modal-button.component.html',
  styleUrls: ['./modal-button.component.scss'],
})
export class ModalButtonComponent {
  @Input() instruction!: ModalButtonIns

  public modalState = false
  private timeoutModal: any

  public toggleModal() {
    this.modalState = !this.modalState
  }

  public setFalseModal() {
    this.modalState = false
  }

  public setTimeoutModal() {
    this.timeoutModal = setTimeout(() => {
      this.setFalseModal()
    }, 300)
  }

  public stopSetTimeOut() {
    clearTimeout(this.timeoutModal)
  }
}
