import { Component } from '@angular/core'
import { SetUpService } from './services/set-up/set-up.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private setUpService: SetUpService) {
    // temp
    // this.setUpService.setUp({
    //   editorSettings: {},
    //   toolBarButtonsSelected: {
    //     TextAlignment: ['Justify'],
    //     TextFormatting: ['Bold', 'FontHeight', 'Italic', 'TextColor'],
    //     Lists: [],
    //   },
    // })

    this.setUpService.setUp()
  }
}
