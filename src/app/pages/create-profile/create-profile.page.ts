import { ProfilesService } from './../../services/profiles.service';
import { Profile } from './../../models/profile';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.page.html',
  styleUrls: ['./create-profile.page.scss'],
})
export class CreateProfilePage implements OnInit {

  public profile: Profile = new Profile("", "", "", "", "", "", "", "", "");

  constructor(private alertController: AlertController, private profileService: ProfilesService) { }

  ngOnInit() {
  }

  submitForm() {
    const newProfile = {
      firstName: this.profile.firstName,
      lastName: this.profile.lastName,
      dob: this.profile.dateOfBirth,
      address: {
        street: this.profile.address.street,
        city: this.profile.address.city,
        state: this.profile.address.state
      },
      jobTitle: this.profile.jobTitle,
      phoneNumber: this.profile.phoneNumber,
      profilePhoto: this.profile.profilePhoto
    };

    this.profileService.addProfile(newProfile);
    this.profile = new Profile("", "", "", "", "", "", "", "", "");
    this.presentAlert();
  }

  
  async fileToBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
  
      reader.onload = () => {
        const base64String = reader.result as string;
        resolve(base64String);
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
    });
  }

  async handleFileInput(event: Event) {
    if (event && event.target && event.target) {
      const file = event.target as HTMLInputElement;
      if (file.files && file.files.length > 0) {
        console.log(file.files);
        this.profile.profilePhoto = await this.fileToBase64(file.files[0]);
      }
    }
  }  

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Success!',
      message: 'Profile created successfully.',
      buttons: ['OK']
    });

    await alert.present();
  }

 

}
