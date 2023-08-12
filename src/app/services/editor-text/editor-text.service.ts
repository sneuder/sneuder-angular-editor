import { Injectable } from '@angular/core'
import { StoreService } from '../store/store.service'

import { StyleSetting, AddSetting } from 'src/app/interface/instructions/single-button.interface'
import { TextFormattingSubType } from 'src/app/interface/set-up.interface'

@Injectable({
  providedIn: 'root',
})
export class EditorTextService {
  private globalStore = this.storeService.getGlobalStore()

  constructor(private storeService: StoreService) {}

  // style which need just one action to take
  public setPlainStyle(styleData: StyleSetting): void {
    const selected = this.globalStore.selectedNode
    const style = selected.style

    if (!style) return

    if (style[styleData.style] === styleData.value) {
      style[styleData.style] = styleData.revert
      this.styleExceptions[styleData.style as 'backgroundColor'](selected, false)
      return
    }

    style[styleData.style] = styleData.value
    this.highlightedException(selected, false)
    this.styleExceptions[styleData.style as 'backgroundColor'](selected, false)
  }

  // add an element to the text content
  public addElement(insertData: AddSetting) {
    let selected = this.globalStore.selectedNode
    if (selected.firstChild.id === 'sneuder-text-area') selected = selected.firstChild
    selected.innerHTML += insertData.insert
  }

  // exceptions

  private styleExceptions = {
    backgroundColor: this.highlightedException,
  }

  private highlightedException(selected: any, revert: boolean) {
    if (revert) {
      selected.style.width = 'auto'
      return
    }

    selected.style.width = 'fit-content'
  }
}
