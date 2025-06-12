import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos: any[] = [];
  userName: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient,public api:ApiService) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    this.userName = this.route.snapshot.queryParamMap.get('name') || '';

    if (userId) {
      this.api.getTodos().subscribe((data:any) => {
         this.todos = data.filter((todo: any) => todo.userId === +userId);
        });
    }
  }
}