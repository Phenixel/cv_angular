import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';
import { ExperienceService } from '../experience.service';
import { Experience } from '../models/experience.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  newSkill: string = '';
  newExperience: Experience = {company: '', date: '', description: '', tasks: []};
  newTask: string = '';
  editingSkillIndex: number | null = null;

  constructor(
    public skillsService: SkillsService,
    private experienceService: ExperienceService
  ) { }

  ngOnInit(): void {
  }

  addSkill(): void {
    if (this.newSkill.trim()) {
      this.skillsService.addSkill(this.newSkill);
      this.newSkill = '';
    }
  }

  deleteSkill(skill: string) {
    this.skillsService.deleteSkill(skill);
  }

  addTask(): void {
    if (this.newTask.trim()) {
      this.newExperience.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  addExperience(): void {
    if (this.newExperience.company.trim() && this.newExperience.date.trim() && this.newExperience.description.trim() && this.newExperience.tasks.length > 0) {
      this.experienceService.addExperience(this.newExperience);
      this.newExperience = { company: '', date: '', description: '', tasks: [] };
      this.newTask = '';
    }
  }



}
