import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'my-tasks/:id',
    renderMode: RenderMode.Client
  },
  {
    path: 'employees/:id',
    renderMode: RenderMode.Client
  },
];
