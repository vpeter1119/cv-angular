import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialsModule } from './app-materials.module';

import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { SkillsComponent } from './skills/skills.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeatureListComponent } from './feature-list/feature-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    SkillsComponent,
    NavbarComponent,
    FeatureListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
