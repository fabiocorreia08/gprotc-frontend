import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  readonly baseUrl : string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8081/gprotc/solicitacoes';
    //this.baseUrl = 'https://192.168.206.12:8246/teste/1.0.0/getcpd_solic/120000000000026';
  }

  getByProtoc(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getList(): Observable<any>{    
    return this.http.get(`${this.baseUrl}`);
  }  

  create(clientes: Array<any>): Observable<Object> {
    return this.http.post<Array<any>>(`${this.baseUrl}`, clientes);
  }

  delete(): Observable<any> {
    return this.http.delete(`${this.baseUrl}`);
  }
  
}
