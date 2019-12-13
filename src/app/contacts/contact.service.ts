import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contact } from './contact';
import { Observable } from 'rxjs';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor( private http: HttpClient) { }

  // 1. get the data from comp
  createContact( contactData: Contact ): Promise<Contact> {
    console.log(contactData);
     // 2. send the data to rest api
      // 2.1  identify the rest api url
      // 2.2  http method -- POST
      // 2.2. hit the rest api using rest client -- HTTPClient 
    const createContactPromise = new Promise( ( resolve, reject ) => {

      this.http.post(this.REST_API_URL, contactData)
        .toPromise()
        .then( (res: any) => {  // 3. receive the resp from rest api
          console.log(res);
          // upon successful resp
          resolve( res ); // 4. send it back to comp
        })
        .catch( (err: any) => {
          console.log(err);
          // if err
          reject(err);
        })
        .finally( () => {
          console.log('It\'s over');
        });
    });

    return createContactPromise as Promise<Contact>; // 4. send it back to comp

  }

  getContacts(): Observable<Contact[]> {
    console.log('inside service');
    return this.http.get(this.REST_API_URL)
      .pipe(map( (res: Contact[])  => {

        // ideal place to sort / flip, filter
        console.log( res );
        return res as any;
      }));
  }

  getContactById( id ): Observable<Contact> {
    console.log('inside service');
    const CONTACT_DETAILS_REST_API_URL = this.REST_API_URL + '/' + id;
    return this.http.get(CONTACT_DETAILS_REST_API_URL)
      .pipe(map( (res: Contact)  => {
        console.log( res );
        return res;
      })) as Observable<Contact>;

  }

  updateContact( contactData ): Promise<Contact> {
    console.log(contactData);
    const updateContactPromise = new Promise( (resolve, reject ) => {

      this.http.put( this.REST_API_URL + '/' + contactData.id, contactData)
        .toPromise()
        .then( (res: Contact) => {  // 3. receive the resp from rest api
          console.log(res);
          // upon successful resp
          resolve( res ); // 4. send it back to comp
        })
        .catch( (err: any) => {
          console.log(err);
          // if err
          reject(err);
        })
        .finally( () => {
          console.log('It\'s over');
        });

    });

    return updateContactPromise as Promise<Contact>;

  }

}
