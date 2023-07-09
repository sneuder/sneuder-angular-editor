import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'

import componentsDeclarations from './config/components.declarations'
import sharedDeclarations from './config/shared.declarations'

@NgModule({
  declarations: [AppComponent, componentsDeclarations, sharedDeclarations],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
