import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyD0GhoNJMh4NWVGXeI2PAHkQ6Ls9hU9F1c",
      authDomain: "angular-blog-f2f78.firebaseapp.com",
      databaseURL: "https://angular-blog-f2f78.firebaseio.com",
      projectId: "angular-blog-f2f78",
      storageBucket: "angular-blog-f2f78.appspot.com",
      messagingSenderId: "892913249322",
      appId: "1:892913249322:web:629d3d6c7247431f45a753"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
