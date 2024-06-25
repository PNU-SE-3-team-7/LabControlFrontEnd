import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {ICourse, ICourseCreateDto, ICoursePreviewDto, IUserCourseListRequest} from "../../models/ICourse";
import {IChangeMemberTypeRequest, ICourseMember, ICourseUserPreviewDto} from "../../models/IUser";


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

  public getUserCourseList(request: IUserCourseListRequest): Observable<ICoursePreviewDto[]> {
    return this.api.post<ICoursePreviewDto[]>(`${this.pathPrefix}/list`, {body: request});
  }

  public getCourseListByOwner(id: string): Observable<ICoursePreviewDto[]> {
    return this.api.get<ICoursePreviewDto[]>(`${this.pathPrefix}/list/byOwner?ownerId=${id}`);
  }

  public deleteCourse(id: string): Observable<void> {
    return this.api.delete<void>(`${this.pathPrefix}/${id}`)
  }

  public getCourseMembers(id: string): Observable<ICourseUserPreviewDto[]> {
    return this.api.get<ICourseUserPreviewDto[]>(`${this.pathPrefix}/${id}/member/list`);
  }

  public addCourseMember(id: string, member: ICourseMember): Observable<ICourseMember> {
    console.log(member)
    return this.api.post<ICourseMember>(`${this.pathPrefix}/${id}/member`, {body: member});
  }

  public deleteCourseMember(id: string, userId: string): void {
    this.api.get<ICourseMember>(`${this.pathPrefix}/${id}/member/${userId}`);
  }

  public changeMemberType(id: string, request: IChangeMemberTypeRequest): void {
    this.api.post<ICourseMember>(`${this.pathPrefix}/${id}/member/type`, {body: request});
  }
}
