import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthorsComponent } from './authors/authors.component';
import { ContactComponent } from './contact/contact.component';
import { ShowcaseComponent } from './showcase/showcase.component';

const routes: Routes = [
  { path: 'home', component: ShowcaseComponent },
  { path: 'about', component: AboutComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
