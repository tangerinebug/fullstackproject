import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayersComponent } from './user/components/players/players.component';
import { GamesComponent } from './user/components/games/games.component';
import { UserRoutingModule } from './user/user-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { EditComponent } from './admin/components/edit/edit.component';
import { AddComponent } from './admin/components/add/add.component';
import { AdminplayersComponent } from './admin/components/adminplayers/adminplayers.component';
import { AdmingamesComponent } from './admin/components/admingames/admingames.component';
import { PlayersService } from './players.service'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    PlayersComponent,
    GamesComponent,
    EditComponent,
    AddComponent,
    AdminplayersComponent,
    AdmingamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    UserRoutingModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
