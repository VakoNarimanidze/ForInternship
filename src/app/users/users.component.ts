import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Users } from '../users';
import {  Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-users',
  imports: [FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  public users: Users[] = [];
  public searchTerm = '';
  filteredUsers:Users[]= []

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.api.getUsers().subscribe((data:any) => {
      this.users = data;
      this.filteredUsers = this.users
    });

    
  }
  goToPosts(user: any): void {
    this.router.navigate(['/posts', user.id], { queryParams: { name: user.name } });
  }

  searchUsers(): void {
  const term = this.searchTerm.toLowerCase();
  this.filteredUsers = this.users.filter(user =>
    user.name.toLowerCase().includes(term) ||
    user.username.toLowerCase().includes(term) ||
    user.email.toLowerCase().includes(term)
  );
}

goToTodos(user: any): void {
  this.router.navigate(['/todos', user.id], {
    queryParams: { name: user.name }
  });
}
}
