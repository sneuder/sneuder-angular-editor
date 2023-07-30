import { Component } from '@angular/core'
import { SetUpService } from './services/set-up/set-up.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private setUpService: SetUpService) {
    this.setUpService.setUp()
  }
}
