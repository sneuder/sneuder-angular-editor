import { Component, Input } from '@angular/core'
import { StyleModalSetting } from 'src/app/interface/instructions/modal-button.interface'

@Component({
  selector: 'app-style-list',
  templateUrl: './style-list.component.html',
  styleUrls: ['./style-list.component.scss'],
})
export class StyleListComponent {
  @Input() public styleModalSetting!: StyleModalSetting
}
