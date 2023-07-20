import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MiniModalComponent } from './mini-modal.component'

describe('MiniModalComponent', () => {
  let component: MiniModalComponent
  let fixture: ComponentFixture<MiniModalComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniModalComponent],
    })
    fixture = TestBed.createComponent(MiniModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
