import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  async resetPassword(email: string):Promise<void>{
    try {
      
    } catch (error) {console.log(error)}
  }
}
