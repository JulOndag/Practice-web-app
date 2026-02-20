import { Component } from '@angular/core';
import { Topbar } from './topbar/topbar';
import { Sidenav } from './sidenav/sidenav';

@Component({
  selector: 'app-dashboard',
  imports: [Topbar, Sidenav],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
