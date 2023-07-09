import { Component } from '@angular/core'

import { StoreService } from 'src/app/services/store/store.service'
import { EditorTextService } from 'src/app/services/editor-text/editor-text.service'

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent {
  constructor(
    private storeService: StoreService,
    private editorTextService: EditorTextService,
  ) {}
}
