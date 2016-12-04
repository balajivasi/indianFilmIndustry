import { Component } from '@angular/core';
import { Config } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  	websiteTitle=Config.WEBSITENAME;
	webSiteLinks=Config.SiteLinks;
}
