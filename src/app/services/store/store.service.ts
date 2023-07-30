import { Injectable } from '@angular/core'

import GlobalStore from 'src/app/interface/global-store.interface'
import SetUpSetting from 'src/app/interface/set-up.interface'

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private globalStore: GlobalStore = {
    textContent: '',
    selectedNode: '' as any,
    setUpSetting: {
      editorSettings: {},
      toolBarButtons: [],
    },
  }

  constructor() {}

  public getGlobalStore() {
    return this.globalStore
  }

  public setGlobalStore(globalKey: keyof typeof this.globalStore, globalValue: string) {
    this.globalStore[globalKey] = globalValue
  }

  public saveEditorSettings(setUpSetting: SetUpSetting) {
    this.globalStore.setUpSetting = setUpSetting
  }
}
