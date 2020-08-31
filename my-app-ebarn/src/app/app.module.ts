import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button'
import { AppCreateTractorsComponent } from './app-create-tractors/app-create-tractors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { AppSelectedTractorsComponent } from './app-selected-tractors/app-selected-tractors.component';
import { MatTableModule } from '@angular/material/table';
import { OpenModalComponent } from './open-modal/open-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';

@NgModule({
  declarations: [
    AppComponent,
    AppCreateTractorsComponent,
    MainMenuComponent,
    AppSelectedTractorsComponent,
    OpenModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    LayoutModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule
  ]
})
export class AppModule { }
