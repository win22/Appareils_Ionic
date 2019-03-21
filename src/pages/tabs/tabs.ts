import {Component} from "@angular/core";
import {AppareilsPage} from "../appareils/appareils";
import {SettingsPage} from "../settings/settings";
import {HomePage} from "../home/home";

@Component({
  selector : 'page-tabs',
  templateUrl: 'tabs.html'
})

export class TabsPage {
  appareilsPage = AppareilsPage;
  settingsPage = SettingsPage;
}
