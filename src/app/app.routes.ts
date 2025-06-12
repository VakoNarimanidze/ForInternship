import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    {path:'',component:HomepageComponent},
    {path: 'users',component:UsersComponent},
    { path: 'posts', component: PostsComponent }, 
    {
  path: 'todos/:id',
  loadComponent: () => import('./todos/todos.component').then(m => m.TodosComponent)
}
];
