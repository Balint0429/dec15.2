import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AlkatreszekComponent } from './alkatreszek/alkatreszek.component';
import { HomeComponent } from './home/home.component';

 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlkatreszekComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //NgModule,
    //FormsModule,
    //HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }