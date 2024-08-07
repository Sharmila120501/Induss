import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartupRoutingModule } from './startup-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../layout/header/header.component';
import { LeftmenuComponent } from '../layout/leftmenu/leftmenu.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, LeftmenuComponent],
  imports: [CommonModule, StartupRoutingModule],
})
export class StartupModule {}
