import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  isSidebarOpen = false;

  // Function to toggle sidebar
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}

