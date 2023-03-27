import { Profile } from './../models/profile';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor() { }

  getProfiles(): Profile[] {

    const profiles = localStorage.getItem('profiles');
    try {
      if (profiles) {
         return JSON.parse(profiles);
      } else {
        return [];
      }
    } catch (e) {
      return [];
    }
  }

  addProfile(profile: any) {
    const profiles = this.getProfiles();
    profiles.push(profile);
    localStorage.setItem('profiles', JSON.stringify(profiles));
  }

  removeProfile(index: number) {
    const profiles = this.getProfiles();
    profiles.splice(index, 1);
    localStorage.setItem('profiles', JSON.stringify(profiles));
  }
}
