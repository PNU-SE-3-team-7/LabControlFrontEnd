import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {AssignmentType, AutoType, GradeType, IAssignment, IAssignmentCreateDto} from "../../models/IAssignment";

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  private pathPrefix: string = "/assignment";

  constructor(
    private api: ApiService
  ) {
  }

  public getByCourseId(id: string): Observable<IAssignment[]> {
    return this.api.get<IAssignment[]>(`${this.pathPrefix}/${id}`);
  }

  public getById(id: string): Observable<IAssignment> {
    return this.api.get<IAssignment>(`${this.pathPrefix}/${id}`);
  }

  public delete(id: string): Observable<IAssignment> {
    return this.api.get<IAssignment>(`${this.pathPrefix}/${id}`);
  }

  public create(data: IAssignmentCreateDto): Observable<IAssignment> {
    return this.api.post<IAssignment>(`${this.pathPrefix}`, {body: data});
  }

  public update(data: IAssignment): Observable<IAssignment> {
    return this.api.put<IAssignment>(`${this.pathPrefix}`, {body: data});
  }

  public static getPlaceholder(): IAssignment {
    return {
      id: "unknown",
      parentId: "unknown",
      title: "unknown",
      description: "unknown",
      courseId: "unknown",
      autoType: AutoType.MANUAL,
      createdDate: new Date(Date.UTC(2024, 2, 1)),
      dueDate: new Date(Date.UTC(2024, 2, 1)),
      gradeType: GradeType.CONTINUOUS,
      submissionEnabled: true,
      type: AssignmentType.TASK,
      updatedDate: new Date(Date.UTC(2024, 2, 1)),
      visibility: false,
      visibilityEnd: new Date(Date.UTC(2024, 2, 1)),
      visibilityStart: new Date(Date.UTC(2024, 2, 1)),
      maxGrade: 0,
      threshold: 0,
      weight: 0,
      sequence: 0
    }
  }
}

