import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsFormComponent } from './settings-form.component';

@NgModule({
  declarations: [SettingsFormComponent],
  imports: [CommonModule],
  exports: [SettingsFormComponent],
})
export class SettingsModule {}
