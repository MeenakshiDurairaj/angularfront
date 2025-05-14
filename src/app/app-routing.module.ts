import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// If the correct path is 'pages/recipes/recipes.component', update as follows:
import { RecipesComponent } from './pages/recipes/recipes.component';
// Otherwise, ensure the file exists at './recipes/recipes.component.ts' or generate it using Angular CLI:
// ng generate component recipes

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
