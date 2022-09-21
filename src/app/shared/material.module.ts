import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatCardModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';

const importandexport = [
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatTooltipModule
];

@NgModule({
  imports: [CommonModule, ...importandexport],
  exports: [...importandexport]
})
export class MaterialModule {}
