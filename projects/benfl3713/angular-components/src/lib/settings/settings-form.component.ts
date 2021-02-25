import { Component, Input, OnInit } from '@angular/core';
import { SettingsItem } from './settings.models';

@Component({
  selector: 'settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.css'],
})
export class SettingsFormComponent implements OnInit {
  constructor() {}

  @Input() fields: SettingsItem[];

  ngOnInit(): void {}
}
