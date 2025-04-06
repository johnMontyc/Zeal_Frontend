import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RolesService } from '../../../services/roles.service';

@Component({
  selector: 'app-roles-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class RolesListComponent implements OnInit{
  roles: any[]=[];
  constructor(private rolesService: RolesService) { }

  ngOnInit(): void {
    this.rolesService.getAllRoles().subscribe((data) => {
      this.roles = data;
    })
  }
  deleteRol(id: number): void {
    this.rolesService.deleteRol(id).subscribe(() => {
      this.roles = this.roles.filter(rol => rol.id !== id);
    });
  }
}
