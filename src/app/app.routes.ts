import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Portfolio } from './portfolio/portfolio';
import { Header } from './header/header';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // Redirect root to /home
  { path: 'home', component: Home },
  { path: 'header', component: Header },
  { path: 'about', component: About },
  { path: 'portfolio', component: Portfolio },
  { path: 'contact', component: Contact },
];
