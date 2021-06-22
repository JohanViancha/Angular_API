import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  }

  getAll(): Promise<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl).toPromise();
  }

  getById(Id: number): Promise<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${Id}`).toPromise();
  }

  create(bodyRequest: any): Promise<any> {
    return this.httpClient.post<any>(this.baseUrl, bodyRequest).toPromise();
  }

  update(bodyRequest: any): Promise<any> {
    return this.httpClient
      .put<any>(`${this.baseUrl}/${bodyRequest.userId}`, bodyRequest)
      .toPromise();
  }

  delete(Id: number): Promise<any> {
    return this.httpClient.delete(`${this.baseUrl}/${Id}`).toPromise();
  }
}
