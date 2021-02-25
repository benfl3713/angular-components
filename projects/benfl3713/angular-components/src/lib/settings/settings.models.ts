export interface SettingsItem {
  title: string;
  type: FieldType;
  options?: { [key: string]: string };
}

export type FieldType = 'text' | 'number' | 'checkbox' | 'slider';

let t: SettingsItem = {
  title: 'test',
  type: 'text',
};
