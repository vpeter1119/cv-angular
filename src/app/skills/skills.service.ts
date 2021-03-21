import { Injectable } from '@angular/core';
import SkillsJson from '../../assets/data/skills.json';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills = [];

  constructor() { }

  getSkills() {
    this.skills = SkillsJson;
    return this.skills;
  }

}
