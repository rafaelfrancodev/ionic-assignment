import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { ProfilesPage } from './profiles.page';

describe('Tab1Page', () => {
  let component: ProfilesPage;
  let fixture: ComponentFixture<ProfilesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
