import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private globalStore = {
    textContent: '',
    selectedNode: '' as any,
  }

  public getGlobalStore() {
    return this.globalStore
  }

  public setGlobalStore(globalKey: keyof typeof this.globalStore, globalValue: string) {
    this.globalStore[globalKey] = globalValue
  }

  constructor() {}
}
