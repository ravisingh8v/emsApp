import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [CommonModule, AppRoutingModule, OverlayModule],
  exports: [HeaderComponent, SidebarComponent],
})
export class CoreModule {}
