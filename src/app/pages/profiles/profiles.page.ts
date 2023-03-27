import { Component } from '@angular/core';
import { ProfilesService } from 'src/app/services/profiles.service';

@Component({
  selector: 'app-profiles',
  templateUrl: 'profiles.page.html',
  styleUrls: ['profiles.page.scss']
})
export class ProfilesPage {

  profiles: any[] = [];

  constructor(private profileService: ProfilesService) { }

  ionViewDidEnter() {
    this.profiles = this.profileService.getProfiles();
  }

}
