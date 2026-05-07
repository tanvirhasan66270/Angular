import { Component } from '@angular/core';

@Component({
  selector: 'app-home-front',
  imports: [],
  templateUrl: './home-front.html',
  styleUrl: './home-front.css',
})
export class HomeFront {

// Sidebar active link handler
  setActive(event: Event): void {
    const links = document.querySelectorAll('.sidebar .nav-link');
    links.forEach(l => l.classList.remove('active'));
    (event.currentTarget as HTMLElement).classList.add('active');
  }

}
