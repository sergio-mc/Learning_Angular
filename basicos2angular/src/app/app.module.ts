import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasNgForComponent } from './directivas-ng-for/directivas-ng-for.component';
import { DirectivasNgIfComponent } from './directivas-ng-if/directivas-ng-if.component';
import { CrearProvedorComponent } from './crear-provedor/crear-provedor.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasNgForComponent,
    DirectivasNgIfComponent,
    CrearProvedorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
