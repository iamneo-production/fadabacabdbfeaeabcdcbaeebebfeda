import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//app.component.html

<header>
  <h3 id="headerContainer">Calory Tracker</h3>
</header>
<div class="container">
  <div class="food-container">
      <app-food-list></app-food-list>
  </div>
</div>
<footer>
  Happy Coding ProGrad <span><img src="../assets/prograd-heart.svg" alt=""></span>!
</footer>
