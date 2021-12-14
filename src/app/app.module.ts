import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { FormsComponent } from './forms/forms.component';
import { AreaComponent } from './area/area.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { StorageService } from './storage.service';
import { PaginationComponent } from './pagination/pagination.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TaskConditionPipe } from './task-condition.pipe';
@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    FormsComponent,
    AreaComponent,
    PaginationComponent,
    TaskConditionPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

