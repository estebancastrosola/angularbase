import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { UserService } from './services';
import { AsideComponent } from './components';
import { HeaderComponent } from './components';
import { FooterComponent } from './components';
import { ContentComponent } from './components';



@NgModule({
  declarations: [
    AsideComponent, HeaderComponent, FooterComponent, ContentComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    UserService
  ],
  exports: [
    AsideComponent, HeaderComponent, FooterComponent, ContentComponent
  ]
})
export class CoreModule { }
