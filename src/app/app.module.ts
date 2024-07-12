import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatIconModule } from '@angular/material/icon';
// Import Angular Material modules
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

// Import your routing module
import { AppRoutingModule } from './app-routing.module';

// Import LocationStrategy
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

// Import standalone components
import { FullComponent } from './layouts/full/full.component';
import { NavigationComponent } from './shared/header/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

// Import your main component
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    // Import standalone components

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([]),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
