import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path:'',
    renderMode:RenderMode.Prerender
  },
  {
    path:'users',
    renderMode:RenderMode.Prerender
  },
  {
    path:'posts',
    renderMode:RenderMode.Prerender
  },
  {
    path:'posts/:id',
    renderMode:RenderMode.Prerender
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
  
];
