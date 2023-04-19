import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skillsList: string[] = ['HTML', 'CSS', 'JS', 'Angular'];

  constructor() { }

  addSkill(skill: string): void {
    this.skillsList.push(skill);
  }

  getSkills(): string[] {
    return this.skillsList;
  }

  updateSkill(index: number, skill: string): void {
    this.skillsList[index] = skill;
  }

  deleteSkill(skill: string) {
    const index = this.skillsList.indexOf(skill);
    if (index !== -1) {
      this.skillsList.splice(index, 1);
    }
  }


}
