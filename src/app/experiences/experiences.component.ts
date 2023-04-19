import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../experience.service';
import { Experience } from '../models/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experiences = this.experienceService.getExperiences();
  }

}
