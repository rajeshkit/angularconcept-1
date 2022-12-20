import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AlbumService } from './album.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrdemoComponent } from './strdemo/strdemo.component';
import { ShowComponent } from './show/show.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    StrdemoComponent,
    ShowComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
