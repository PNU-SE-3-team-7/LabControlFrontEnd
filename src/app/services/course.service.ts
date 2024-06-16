import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {ICourse} from "../models/ICourse";


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private api: ApiService
  ) {
  }

}
