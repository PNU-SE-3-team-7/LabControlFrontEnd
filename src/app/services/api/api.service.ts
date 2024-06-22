import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {

  protected baseURL: string = "http://localhost:8080";

  protected headers: any = {};

  constructor(
    private http: HttpClient
  ) {
  }

  private getOptions(data: any) {
    const headers = new HttpHeaders(Object.assign({}, this.headers));

    return {
      params: data.params ? data.params : {},
      withCredentials: true,
      headers: Object.assign(headers, data.headers ? data.headers : {}),
    };
  }

  public get<T>(url: string, data: any = {}): Observable<T> {
    return this.http.get<T>(
      this.baseURL + url,
      this.getOptions(data)
    )
  }

  public post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(
      this.baseURL + url,
      data.body || {},
      this.getOptions(data)
    )
  }

  public put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(
      this.baseURL + url,
      data.body || {},
      this.getOptions(data)
    )
  }

  public patch<T>(url: string, data?: any): Observable<T> {
    return new Observable((observer) => {

      const sub = this.http.patch(
        this.baseURL + url,
        data.body || {},
        this.getOptions(data)
      ).subscribe((r) => {
        observer.next(r as T);
        observer.complete();
      }, (e) => {

        switch (e.status) {
          case 401:
            observer.error(e);
            break;
          case 403:
            observer.error(e);
            break;
          default:
            observer.error(e);
            break;
        }
        observer.complete();

      });
      return {
        unsubscribe() {
          sub.unsubscribe();
        }
      };
    });
  }

  public delete<T>(url: string, data?: any): Observable<T> {
    return new Observable((observer) => {

      const sub = this.http.delete(
        this.baseURL + url,
        this.getOptions(data)
      ).subscribe((r) => {
        observer.next(r as T);
        observer.complete();
      }, (e) => {

        switch (e.status) {
          case 401:
            observer.error(e);
            break;
          case 403:
            observer.error(e);
            break;
          default:
            observer.error(e);
            break;
        }
        observer.complete();

      });

      return {
        unsubscribe() {
          sub.unsubscribe();
        }
      };
    });
  }

  public download<T>(url: string, fileId?: string, dataRecordId?: string): Observable<any> {
    return new Observable(observer => {
      const sub = this.http.get(
        `${this.baseURL + url}/${fileId}/download/?dataRecordId=${dataRecordId}`,
        {observe: "response", responseType: "blob", withCredentials: true}
      ).subscribe(
        res => {
          observer.next(res);
          observer.complete();
        },
        e => {
          observer.error(e);
        }
      );
      return {
        unsubscribe() {
          sub.unsubscribe();
        }
      };
    });

  }

  public upload(url: string, formData: FormData): Observable<any> {
    return new Observable(observer => {
      const sub = this.http.post(
        this.baseURL + url,
        formData,
        {withCredentials: true}
      ).subscribe(
        res => {
          observer.next(res);
          observer.complete();
        },
        err => {
          observer.error(err);
          observer.complete();
        }
      );
      return {
        unsubscribe() {
          sub.unsubscribe();
        }
      };
    });
  }
}
