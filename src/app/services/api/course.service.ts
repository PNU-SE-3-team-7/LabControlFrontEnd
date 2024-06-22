import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {ICourse, ICourseCreateDto, ICoursePreviewDto} from "../../models/ICourse";
import {ICourseUserPreviewDto} from "../../models/IUser";


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private pathPrefix: string = "/course";

  constructor(
    private api: ApiService
  ) {
  }

  public getCourse(id: string): Observable<ICourse> {
    return this.api.get<ICourse>(`${this.pathPrefix}/${id}`);
  }

  public createCourse(course: ICourseCreateDto): Observable<ICourse> {
    return this.api.post<ICourse>(`${this.pathPrefix}`, {body: course});
  }

  public updateCourse(course: ICourse): Observable<ICourse> {
    return this.api.put<ICourse>(`${this.pathPrefix}`, {body: course});
  }

  public getCourseMembers(id: string): Observable<ICourseUserPreviewDto[]> {
    return this.api.get<ICourseUserPreviewDto[]>(`${this.pathPrefix}/${id}/member/list`);
  }

  public getCourseListByOwner(id: string): Observable<ICoursePreviewDto[]> {
    return this.api.get<ICoursePreviewDto[]>(`${this.pathPrefix}/list/byOwner?ownerId=${id}`);
  }

  public deleteCourse(id: string): Observable<void> {
    return this.api.delete<void>(`${this.pathPrefix}/${id}`)
  }
}
