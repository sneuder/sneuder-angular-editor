import { Component } from '@angular/core'

@Component({
  selector: 'app-modal-button',
  templateUrl: './modal-button.component.html',
  styleUrls: ['./modal-button.component.scss'],
})
export class ModalButtonComponent {
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
