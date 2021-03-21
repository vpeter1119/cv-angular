import { Component, OnInit, HostListener } from '@angular/core';
import { SkillsService } from '../skills/skills.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  skills = [];

  constructor(
    private skillsService: SkillsService
  ) { }

  ngOnInit(): void {
    this.skills = this.skillsService.getSkills();
  }

  coverOpacity = 1;

  @HostListener('window:scroll', ['$event'])

  onScroll() {
    let verticalOffset = window.pageYOffset;
    let innerHeight = window.innerHeight;
    this.coverOpacity = 1-(verticalOffset / innerHeight);
  }

}
