import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {
  AccuracyGrade,
  CompletionGrade,
  ISubmission,
  ISubmissionCreateDto,
  SubmissionStatus
} from "../../models/ISubmission";

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  private pathPrefix: string = "/submission";

  constructor(
    private api: ApiService
  ) {
  }

  public getByAssignmentId(id: string): Observable<ISubmission[]> {
    return this.api.get<ISubmission[]>(`${this.pathPrefix}/${id}`);
  }

  public getById(id: string): Observable<ISubmission> {
    return this.api.get<ISubmission>(`${this.pathPrefix}/${id}`);
  }

  public delete(id: string): Observable<ISubmission> {
    return this.api.get<ISubmission>(`${this.pathPrefix}/${id}`);
  }

  public create(data: ISubmissionCreateDto): Observable<ISubmission> {
    return this.api.post<ISubmission>(`${this.pathPrefix}`, {body: data});
  }

  public update(data: ISubmission): Observable<ISubmission> {
    return this.api.put<ISubmission>(`${this.pathPrefix}`, {body: data});
  }

  public static getPlaceholder(): ISubmission {
    return {
      id: "unknown",
      parentId: "unknown",
      userId: "unknown",
      assignmentId: "unknown",
      accuracyGrade: AccuracyGrade.NONE,
      completionGrade: CompletionGrade.NONE,
      submissionStatus: SubmissionStatus.NOT_TURNED_IN,
      createdDate: new Date(Date.UTC(2024, 2, 1)),
      turnedInDate: new Date(Date.UTC(2024, 2, 1)),
      updatedDate: new Date(Date.UTC(2024, 2, 1)),
      grade: 0,
      autoGrade: 0
    }
  }
}

