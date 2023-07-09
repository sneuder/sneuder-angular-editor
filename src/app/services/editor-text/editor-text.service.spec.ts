import { TestBed } from '@angular/core/testing'

import { EditorTextService } from './editor-text.service'

describe('EditorTextService', () => {
  let service: EditorTextService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(EditorTextService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
