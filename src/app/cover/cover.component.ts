import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  coverOpacity = 0.5;

  @HostListener('window:scroll', ['$event'])

  onScroll() {
    let verticalOffset = window.pageYOffset;
    let innerHeight = window.innerHeight;
    this.coverOpacity = 1-(verticalOffset / innerHeight);
  }

}
