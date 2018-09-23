import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EditableTableComponent } from './editable-table/editable-table.component';
import { HttpClientModule } from '@angular/common/http';
import {EnvironmentsService} from './_services/environments.service';
@NgModule({
  declarations: [
    AppComponent,
    EditableTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EnvironmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
