import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(private settingsServices: SettingsService) { }

  ngOnInit(): void {
    this.settingsServices.checkCurrentTheme();
  }

  changeTheme(theme: string): void {
    this.settingsServices.changeTheme(theme);
  }

}
