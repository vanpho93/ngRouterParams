import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WordListComponent } from './word-list.component';
import { WordComponent } from './word.component';

const routesConfig: Routes = [
  { path: '', component: WordListComponent },
  { path: 'word', component: WordComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WordListComponent,
    WordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
