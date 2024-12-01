import { Component } from '@angular/core';
import { AuthButtonComponent } from "../auth-button/auth-button.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";

@Component({
  selector: 'app-website-banner',
  standalone: true,
  imports: [ AuthButtonComponent, UserProfileComponent ],
  templateUrl: './website-banner.component.html',
  styleUrl: './website-banner.component.css'
})
export class WebsiteBannerComponent {

}
