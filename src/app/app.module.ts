import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { environment } from "../environments/environment";

import { AngularFireModule } from "angularfire2";

import { AppComponent } from './app.component';
import { MaterialModule } from './/material.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module'

import { RoutingModule } from './/routing.module';
import { PostModule } from './post/post.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    MaterialModule,
    CoreModule,
    SharedModule,
    RoutingModule,
    PostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
