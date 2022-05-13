import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AbstractControl, AsyncValidator, FormControl } from "@angular/forms";
import { map } from 'rxjs/operators'
@Injectable({
    providedIn: 'root'
})
export class UniqueUsername implements AsyncValidator {
    constructor(private http : HttpClient){}

    validate = (control: AbstractControl) => {
        const { value } = control;
        
        console.log(this.http);
        return this.http.post<any>('https://api.angular-email.com/auth/username', {
            username: value
        })
        .pipe(
            map(value =>{
                console.log(value);
                return null;
            })
        );
    };
}
