import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";


@Injectable({
  providedIn: 'root'
})
export class MatSnakeService {

  constructor(
    private matSnack: MatSnackBar,
  ) {
  }

  public error(error: any): void {
    let message = "Something went wrong";

    if (error && error.error && error.error.message) {
      message = error.error.message;
    } else if (error && error.message) {
      message = error.message
    }

    this.matSnack.open(message, "OK", {duration: 5000})
  }

  public info(message: string): void {
    this.matSnack.open(message, "OK", {duration: 5000})
  }
}
