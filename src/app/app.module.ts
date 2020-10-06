import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { AddTextDirective } from './add-text.directive';
import { SqrtPipe } from "./app.sqrt";
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MyserviceService } from "./myservice.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    AddTextDirective,
    SqrtPipe,
    HomeComponent,
    ContactusComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
