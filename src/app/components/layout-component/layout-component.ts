import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-layout-component',
  imports: [
    RouterOutlet,
    RouterModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.css',
})
export class LayoutComponent implements OnInit {
  shoHideSideNav = true;
  showUserMenu = false;
  showDropDown = false;
  isDesktop = window.innerWidth >= 768;
  showNotificationDropDown = false;
  showSettingsDropDown = false;

  sideNavToggle() {
    this.shoHideSideNav = !this.shoHideSideNav;
  }

  closeSideNavOnMobile() {
    if (!this.isDesktop) {
      this.shoHideSideNav = false;
    }
  }

  ngOnInit() {
    window.addEventListener(
      'click',
      this.closeDropdownOnClickOutside.bind(this)
    );
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth >= 768;
    });
  }
  dropDownToggle(iconType: string) {
    if (iconType === 'notification') {
      this.showNotificationDropDown = !this.showNotificationDropDown;
      this.showSettingsDropDown = false;
    }
    if (iconType === 'settings') {
      this.showSettingsDropDown = !this.showSettingsDropDown;
      this.showNotificationDropDown = false;
    }
  }
  closeDropdownOnClickOutside(event: Event) {
    const clickedInside = (event.target as HTMLElement).closest('.relative');
    if (!clickedInside) this.showUserMenu = false;
  }
}
