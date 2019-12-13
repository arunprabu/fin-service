import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor( private http: HttpClient) { }

  // 1. get the data from comp
  createContact( contactData: any ) {
    console.log(contactData);

    // 2. send the data to rest api
      // 2.1  identify the rest api url
      // 2.2  http method -- POST
      // 2.2. hit the rest api using rest client -- HTTPClient 
    return this.http.post(this.REST_API_URL, contactData)
        .pipe(map((res: any) => { // 3. receive the resp from rest api
          console.log(res);
          // 4. send it back to comp
          return res;
        }));
  }

 




}
