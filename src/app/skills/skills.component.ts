import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsList: string[] = [];

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.skillsList = this.skillsService.getSkills();
  }

  addSkill(skill: string): void {
    this.skillsService.addSkill(skill);
    this.skillsList = this.skillsService.getSkills();
  }

}
