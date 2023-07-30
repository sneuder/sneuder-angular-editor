import { Injectable } from '@angular/core'
import { StoreService } from '../store/store.service'

import { StyleSetting, AddSetting } from 'src/app/interface/instructions/single-button.interface'

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
      return
    }

    style[styleData.style] = styleData.value
  }

  // add an element to the text content
  public addElement(insertData: AddSetting) {
    let selected = this.globalStore.selectedNode
    if (selected.firstChild.id === 'sneuder-text-area') selected = selected.firstChild
    selected.innerHTML += insertData.insert
  }
}
