import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { PostsComponent } from './components/posts/posts.component';
import { PendingChangesGuard } from './guards/pendingChanges.guard';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full'},
  { path: 'posts', component: PostsComponent},
  { path: 'posts/:id', component: DetailsComponent, canDeactivate: [PendingChangesGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
