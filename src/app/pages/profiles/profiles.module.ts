import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfilesPage } from './profiles.page';

import { ProfilesPageRoutingModule } from './profiles-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProfilesPageRoutingModule
  ],
  declarations: [ProfilesPage]
})
export class ProfilesPageModule {}
