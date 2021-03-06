import { NgModule } from '@angular/core';

import { AngularFirestoreModule } from 'angularfire2/firestore/';
import { AngularFireStorageModule } from 'angularfire2/storage/';
import { AngularFireAuthModule } from 'angularfire2/auth/';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    AuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    UserModule
  ],
  declarations: [],
  providers: [AuthService]
})
export class CoreModule { }
