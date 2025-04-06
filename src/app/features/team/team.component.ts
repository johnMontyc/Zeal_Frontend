import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'John Montoya',
      position: 'Backend Developer',
      image: 'assets/team/.jpg',
      linkedin: 'https://www.linkedin.com/',
      github: 'https://github.com/'
    },
    {
      name: 'Issa Cooper',
      position: 'Frontend Developer',
      image: 'assets/team/issa-cooper.jpg',
      linkedin: 'https://www.linkedin.com/in/issa-cooper-moretti-b9a3b5324/',
      github: 'https://github.com/issa-cooper'
    },
    {
      name: 'Juan Diego Gil',
      position: 'UI/UX Designer',
      image: 'assets/team/.jpg',
      linkedin: 'https://www.linkedin.com/in/juan-diego-gil-roldan-8b5883332/',
      github: 'https://github.com/Juangil56'
    },
    {
      name: 'Luis Martinez',
      position: 'Project Manager',
      image: 'assets/team/luis-martinez.jpg',
      linkedin: 'https://www.linkedin.com/in/luis-martínez-3a9881343/',
      github: 'https://github.com/malucefe'
    }
  ];
}
