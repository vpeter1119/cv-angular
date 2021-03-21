import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
  ],
  declarations: []
})

export class AppMaterialsModule { }
