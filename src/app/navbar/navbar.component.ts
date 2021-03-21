import { Component, HostListener, OnInit } from '@angular/core';
import { SkillsService } from '../skills/skills.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  skills = [];

  constructor(
    private skillsService: SkillsService 
  ) { }

  navbarOpacity = 0;

  ngOnInit(): void {
    this.skills = this.skillsService.getSkills();
  }

  @HostListener('window:scroll', ['$event'])

  onScroll() {
    let verticalOffset = window.pageYOffset;
    let innerHeight = window.innerHeight;
    //let currentOpacity = (verticalOffset / innerHeight);
    //this.navbarOpacity = (currentOpacity > 0.7) ? currentOpacity : 0;
    this.navbarOpacity = (verticalOffset / innerHeight);
  }

}
