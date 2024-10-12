import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  private url_api = 'https://cocinacreativaapi.onrender.com/API/'
  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.url_api + 'recipes')
  }

  public getFilterData(categoria:string): Observable<any>{
    return this.http.get<any>(this.url_api + 'recipe_cat/'+categoria)
  }

  public getRecipeData(id:number): Observable<any>{
    return this.http.get<any>(this.url_api + 'recipe/'+id)
  }

}
