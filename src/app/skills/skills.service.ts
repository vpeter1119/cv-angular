import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills = [
    {
      title: 'Web Development',
      icon: 'web',
      summary: 'I can develop websites.'
    },
    {
      title: 'Mapmaking',
      icon: 'map',
      summary: 'So nerdy...'
    }
  ]

  constructor() { }

  getSkills() {
    return this.skills;
  }

}
