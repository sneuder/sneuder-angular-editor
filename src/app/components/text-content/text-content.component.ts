import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { StoreService } from 'src/app/services/store/store.service'

@Component({
  selector: 'app-text-content',
  templateUrl: './text-content.component.html',
  styleUrls: ['./text-content.component.scss'],
})
export class TextContentComponent implements AfterViewInit {
  @ViewChild('textArea') private textAreaRef!: ElementRef

  public globalStore

  constructor(private storeService: StoreService) {
    this.globalStore = this.storeService.globalStore
  }

  ngAfterViewInit(): void {
    this.textAreaRef.nativeElement.addEventListener('mouseup', () => {
      const selection = window.getSelection() as any
      this.storeService.setGlobalStore('selectedNode', selection.baseNode.parentElement)
    })
  }

  public saveTextContent(event: any) {
    this.storeService.setGlobalStore('textContent', event.target.innerHTML)
  }
}
