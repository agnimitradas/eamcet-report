import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from './grid/grid.component';
import { HomeComponent } from './home/home.component';

const route=[
  {path:' ', redirectTo: 'home', pathMatch:'full'},
  {path:'showGrid', component: GridComponent},
  {path:'home', component: HomeComponent},
  {path:'**', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    AgGridModule.withComponents([]),
    FormsModule,
    HttpModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
