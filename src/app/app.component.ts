import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mindtree Java MS-Rettraing';// property
  name = 'Admin';// property
  place = 'Chennai';

  display=()=> {
    this.place = 'display function called by button clik from the view'; 
  }
}
