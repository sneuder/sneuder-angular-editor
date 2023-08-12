import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { StoreService } from 'src/app/services/store/store.service'

@Component({
  selector: 'app-text-content',
  templateUrl: './text-content.component.html',
  styleUrls: ['./text-content.component.scss'],
})
export class TextContentComponent implements AfterViewInit {
  @ViewChild('textArea') private textAreaRef!: ElementRef

  public globalStore = this.storeService.getGlobalStore()

  constructor(private storeService: StoreService) {}

  ngAfterViewInit(): void {
    this.textAreaRef.nativeElement.addEventListener('mouseup', () => {
      const selection = window.getSelection() as any
      const selectedElement = selection.baseNode.parentElement

      this.storeService.setGlobalStore('selectedNode', selectedElement)
      if (selectedElement.id === 'sneuder-text-area') {
        this.storeService.setGlobalStore('selectedNode', this.formatFirstWords())
      }
    })
  }

  private formatFirstWords(): HTMLDivElement {
    const newDiv = document.createElement('div')
    const firstChild = this.globalStore.selectedNode.firstChild

    newDiv.appendChild(firstChild)
    const secondChild = this.globalStore.selectedNode.firstChild

    if (secondChild) {
      this.globalStore.selectedNode.insertBefore(newDiv, secondChild)
      return newDiv
    }

    this.globalStore.selectedNode.appendChild(newDiv)
    return newDiv
  }
}
