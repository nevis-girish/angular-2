import { Injectable } from '@angular/core'; 
import { Http , Response } from '@angular/http'; 
import { Observable } from 'rxjs/Rx'; 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IProduct } from './product';  

@Injectable() 
export class ProductService { 
   constructor(private http: Http) {
    }

    public getJSON(): Observable<any> {
        return this.http.get("./product.json")
	         .map((response: Response) => <IProduct[]> response.json())
	         .do(data => console.log(JSON.stringify(data)))
	         .catch(this.handleError);

    }
    private handleError(error: Response) { 
      console.error(error); 
      return Observable.throw(error.json().error()); 
    }
}