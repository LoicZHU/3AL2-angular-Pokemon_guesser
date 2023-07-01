import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import * as fs from 'fs';

@Injectable({
  providedIn: 'root',
})
export abstract class CoreService {
  private readonly _apiUrl: string;

  protected constructor(protected readonly httpClient: HttpClient) {
    this._apiUrl = '../../../../assets/data/data.json';
  }

  saveData(): Observable<any> {
    return this.httpClient.get(this.getPath(this._apiUrl));
  }

  create(payload: any): void {
    const stroData = localStorage.getItem('jsonData');
    const json = JSON.parse(String(stroData));
    json.push(payload);
    localStorage.setItem('jsonData', JSON.stringify(json));
  }

  delete(id: number): void {
    const stroData = localStorage.getItem('jsonData');
    const json = JSON.parse(String(stroData));

    const index = json.findIndex((element: any) => element.number == id);
    json.splice(index, 1);

    localStorage.setItem('jsonData', JSON.stringify(json));
  }

  getAll<T>(): T {
    const data = String(localStorage.getItem('jsonData'));
    const jsonData = JSON.parse(data);

    return jsonData ?? [];
  }

  getOneByField<T extends { number: number }>(id: string | number): undefined | T {
    const data = this.getAll<T[]>();

    if (!('number' in data[0])) {
      return undefined;
    }

    return data.find((element) => element.number == id);
  }
  updateByField(id: number | string, payload: any): void {
    const stroData = localStorage.getItem('jsonData');
    const json = JSON.parse(String(stroData));
    const index = json.findIndex((element: any) => element.number == id);

    json[index] = payload;

    localStorage.setItem('jsonData', json);
  }

  protected getPath(_path: string, id?: number | string): string {
    const path = `${this._apiUrl}/${_path}`;

    return !id ? path : `${path}/${id}`;
  }
}
