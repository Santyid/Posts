import { PostsMocks } from './posts.mocks';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  posts = PostsMocks;

  eliminarJson(evento) {
    evento.path[1].style.display = 'none';
  }


}
