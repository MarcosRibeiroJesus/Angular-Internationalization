import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-translate';

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('pt-br');
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }
}
