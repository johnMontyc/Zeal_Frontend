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
      name: 'Juan Gil',
      position: 'Backend Developer',
      image: 'assets/team/.jpg',
      linkedin: 'https://www.linkedin.com/in//',
      github: 'https://github.com/'
    },
    {
      name: 'Luis Martinez',
      position: 'Frontend Developer',
      image: 'assets/team/luis-martinez.jpg',
      linkedin: 'https://www.linkedin.com/in/luis-martínez-3a9881343/',
      github: 'https://github.com/malucefe'
    }
  ];
}
