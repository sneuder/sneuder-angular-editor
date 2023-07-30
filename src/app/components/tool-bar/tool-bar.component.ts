import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
} from '@angular/core'

import { EditorTextService } from 'src/app/services/editor-text/editor-text.service'
import { StoreService } from 'src/app/services/store/store.service'

import { SingleButtonSetting } from 'src/app/interface/instructions/single-button.interface'

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent implements AfterViewInit {
  @ViewChild('buttonsContainer', { read: ViewContainerRef })
  containerButtons!: ViewContainerRef

  private globalStore = this.storeService.getGlobalStore()
  private buttonsToRender = this.globalStore.setUpSetting.toolBarButtons

  constructor(
    private storeService: StoreService,
    private editorTextService: EditorTextService,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    // binding
    this.setEditorStyles = this.setEditorStyles.bind(this)
  }

  ngAfterViewInit(): void {
    this.renderButtons()
  }

  private renderButtons() {
    this.buttonsToRender.forEach((buttonsToRender) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        buttonsToRender.component,
      )
      const componentRef: any = this.containerButtons.createComponent(componentFactory)

      componentRef.instance.instruction = buttonsToRender

      if (componentRef.instance.setStyle) {
        componentRef.instance.setStyle.subscribe(this.setEditorStyles)
      }
    })
  }

  private setEditorStyles(setting: SingleButtonSetting) {
    this.editorTextService[setting.service](setting as any)
  }
}
