import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

import { AuthService } from '../../core/auth.service';
import { User } from '../user.model';
import { UserService } from '../user.service';




@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  editing = false;
  user: User;
  task: AngularFireUploadTask

  constructor(
    private auth: AuthService,
    private userService: UserService,
    private storage: AngularFireStorage,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    return this.auth.user.subscribe(user => (this.user = user));
  }

  updateProfile() {
    return this.userService.updateProfileData(
      this.user.displayName,
      this.user.photoURL
    )
  }

  updateEmail() {
    return this.userService.updateEmailData(this.user.email)
  }

  uploadPhotoURL(event): void {
    const file = event.target.files[0]
    const path = `users/${this.user.uid}/photos/${file.name}`
    if (file.type.split('/')[0] !== 'image') {
      return alert('Only images are allowed')
    } else {
      this.task = this.storage.upload(path, file)
      this.task.downloadURL().subscribe(url => {
        this.userService.updateProfileData(this.user.displayName, url)
      })
    }
  }

  updateUser() {
    const data = {
      website: this.user.website || null,
      location: this.user.location || null, 
      bio: this.user.bio || null
    }
    return this.userService.updateUserData(data)
  }

  goBack() {
    this.location.back()
  }

}
