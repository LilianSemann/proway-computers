import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifService {

  constructor (
    private snackBar: MatSnackBar
  ) { }

  notify(message: string) {
    this.snackBar.open(message, "Ok", {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    })
  }
}
