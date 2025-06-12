import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
userId: number | null = null;
  posts: any[] = [];
  userName: string = '';

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.userId = Number(idParam);
    } else {
      this.userId = null;
    }

    this.route.queryParams.subscribe(params => {
      this.userName = params['name'] || '';
    });

    if (this.userId !== null) {
      this.apiService.getPostsByUser(this.userId).subscribe(data => {
        this.posts = data;
      });
    } else {
      this.apiService.getPostsByUser().subscribe(data => {
        this.posts = data;
      });
    }
  }
    selectedPost: any = null;

  openDetails(post: any) {
    this.selectedPost = post;
  }

  closeDetails() {
    this.selectedPost = null;
  }
}

