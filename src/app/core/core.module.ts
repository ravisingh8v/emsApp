import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [HeaderComponent, SidebarComponent],
})
export class CoreModule {}
