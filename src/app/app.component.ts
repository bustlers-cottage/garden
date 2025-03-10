import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatIconRegistry} from '@angular/material/icon';
import {NavComponent} from './nav/nav.component';
import {HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {NgOptimizedImage} from '@angular/common';
import {BackgroundComponent} from './background/background.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, NgOptimizedImage, BackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Bustlers Cottage Garden';


  constructor(private icons: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.icons.setDefaultFontSetClass("material-symbols-rounded")
    this.icons.addSvgIcon('instagram', this.sanitizer.bypassSecurityTrustResourceUrl('icons/instagram.svg'));
  }
}
