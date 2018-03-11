import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MagicModule} from "./magic/magic.core.module";
import {AppComponent} from "./app.component";
import {DynamicModule} from "ng-dynamic-component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatSelectModule, MatToolbarModule
} from "@angular/material";
import {ComponentsList} from "./ComponentList";
import {ThemeModule} from "./magic/src/ui/theme/theme.module";
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {MatMomentDateModule} from "@angular/material-moment-adapter";
// import {WMatTimePickerComponent} from "./components/TimePicker/time-control/w-mat-timepicker.component";
// import {WClockComponent, WTimeDialogComponent} from "./components/TimePicker";

const comps = ComponentsList.getAllComponents();

@NgModule({
   declarations: [AppComponent, ...comps,   // timepicker
    // WMatTimePickerComponent,
    // WTimeDialogComponent,
    // WClockComponent,
     ],
   imports     : [
      BrowserModule,
      FormsModule,
      HttpModule,
      JsonpModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      InfiniteScrollModule,
      DynamicModule.withComponents(comps),
      MagicModule.forRoot(),
      CalendarModule,
   // Angular Material
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatToolbarModule,
    MatSelectModule,
    ThemeModule,
   ],
   exports     : [FormsModule, ReactiveFormsModule, InfiniteScrollModule],
   providers   : [],

   bootstrap: [AppComponent],
   // entryComponents:[WTimeDialogComponent]
})
export class AppModule
{
   constructor() {}
}
