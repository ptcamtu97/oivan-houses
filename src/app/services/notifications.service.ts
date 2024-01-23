import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  #snackBar = inject(MatSnackBar);

  notification(message: string): void {
    this.#snackBar.open(message, '', {
      verticalPosition: 'top',
      duration: 3000,
    });
  }
}
