import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  public globalStore = {
    textContent: '',
    selectedNode: '',
  }

  public setGlobalStore(globalKey: keyof typeof this.globalStore, globalValue: string) {
    this.globalStore[globalKey] = globalValue
  }

  constructor() {}
}
