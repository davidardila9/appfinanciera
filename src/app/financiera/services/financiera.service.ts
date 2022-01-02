import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Financiera } from "src/app/finan/interface/financiera.interface";


@ Injectable({
    providedIn: 'root'
}

)  
export class financieraService {

    constructor (private http: HttpClient) {}
        
        getFinanciera(): Observable <Financiera[]>{
          return  this.http.get<Financiera[]>('http://localhost:8080/ApiRest/users');
        }
         
        
        
         
        

        }
    

