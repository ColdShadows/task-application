import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebsiteBannerComponent } from "./website-banner/website-banner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WebsiteBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-application';
}
