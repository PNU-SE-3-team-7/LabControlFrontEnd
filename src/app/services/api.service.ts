import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {

  protected baseURL: string = "http://localhost:8080/api";

  protected headers: any = {};

  constructor(
    private http: HttpClient
  ) { }

  private getOptions(data: any) {
    const headers = new HttpHeaders(Object.assign({}, this.headers));

    return {
      params: data.params ? data.params : {},
      withCredentials: true,
      headers: Object.assign(headers, data.headers ? data.headers : {}),
    };
  }

  public get<T>(url: string, data: any = {}): Observable<T>{
    return this.http.get<T>(
      this.baseURL + url,
      this.getOptions(data)
    )
  }

  public post<T>(url: string, data: any): Observable<T>{
    return this.http.post<T>(
      this.baseURL + url,
      data.body || {},
      this.getOptions(data)
    )
  }

  public put<T>(url: string, data: any): Observable<T>{
    return this.http.put<T>(
      this.baseURL + url,
      data.body || {},
      this.getOptions(data)
    )
  }
}
