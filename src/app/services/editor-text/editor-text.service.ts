import { Injectable } from '@angular/core'
import { StoreService } from '../store/store.service'

@Injectable({
  providedIn: 'root',
})
export class EditorTextService {
  private globalStore = this.storeService.getGlobalStore()

  constructor(private storeService: StoreService) {}

  // style which need just one action to take
  public setPlainStyle(styleData: any): void {
    const selected = this.globalStore.selectedNode
    const style = selected.style

    if (style[styleData.style] === styleData.value) {
      style[styleData.style] = styleData.revert
      return
    }

    style[styleData.style] = styleData.value
  }
}
