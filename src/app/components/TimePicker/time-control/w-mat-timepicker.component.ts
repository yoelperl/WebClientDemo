import {Component, forwardRef} from "@angular/core";
import {MatDialog} from "@angular/material";

import {WTimeDialogComponent} from "./w-time-dialog.component";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";


export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => WMatTimePickerComponent),
  multi: true
};


@Component({
  selector: "w-mat-timepicker",
  styleUrls: ["./w-mat-timepicker.component.scss"],
  templateUrl: "./w-mat-timepicker.component.html",
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]

})
export class WMatTimePickerComponent implements ControlValueAccessor {

  onChange: any = () => {
  };
  onTouched: any = () => {
  };

  writeValue(date: any) {

    if (!date) return;
    this.hour = date.getHours();
    this.minute = date.getMinutes();
    this.meridien = 'AM';//~date.gettoLowerCase().indexOf('am') ? 'AM' : 'PM'
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }


  private hour = 10;
  private minute = 25;
  private meridien = "PM";


  constructor(private dialog: MatDialog) {
  }


  private getTime(): string {

    return `${this.hour}:${this.minute} ${this.meridien}`;
  }

  private showPicker($event) {

    let dialogRef = this.dialog.open(WTimeDialogComponent, {
      data: {
        hour: this.hour,
        minute: this.minute,
        meriden: this.meridien
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      // result will be update userTime object or -1 or undefined (closed dialog w/o clicking cancel)
      if (result === undefined) {
        return;
      } else if (result !== -1) {

        this.hour = result.hour;
        this.minute = result.minute;
        this.meridien = result.meriden;
      }
    });

    return false;
  }
}
