import { Injectable } from '@angular/core';
import { Experience } from './models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  experiences: any[] = [
    {
      company: 'PROS and CONSULTING',
      date: 'Octobre 2022 - Actuel',
      description: 'Emploi en alternance pendant la réalisation de mon Bachelor.',
      tasks: ['Chargé du développement de solution d\'automatisation.', 'Chargé de gestion d\'équipe pour la création de plateforme web.']
    },
    {
      company: 'Typia',
      date: 'Octobre 2021 - Juillet 2022',
      description: 'Emploi en alternance pendant la réalisation de mon BTS.',
      tasks: ['Chargé du développement de sites internets.', 'Apprentissage de Django et utilisation pour des projets internes.']
    },
    {
      company: 'DMZ Diffusion',
      date: 'Juillet - Août 2021',
      description: 'Emploi de vacances dans lequel les missions suivantes m\'ont été confié :',
      tasks: ['Chargé de la mise en place du site d\'E-Commerce DMZlitterie.com', 'Chargé de la construction de la base de données.', 'Utilisation de Wordpress avec WooCommerce.']
    },
    {
      company: 'Parfum de Scène',
      date: 'Mai - Juin 2021',
      description: 'Stage obligatoire de 1er année de BTS, je devais alors réaliser les missions suivante :',
      tasks: ['Chargé du développement du portefolio de jean louis gand.', 'Chargé de la construction de la base de données.', 'Utilisation de l’HTML, CSS et JS pour le Front End et PHP / SQL pour la Back End.']
    }
  ];

  constructor() { }

  addExperience(experience: Experience): void {
    this.experiences.push(experience);
  }

  getExperiences(): Experience[] {
    return this.experiences;
  }
}
