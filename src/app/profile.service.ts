import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";
import 'rxjs/add/operator/catch';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private accesstoken =environment.accesstoken;

  constructor(private http:HttpClient) {
    console.log("service is now ready!");
    this.username = 'IsaacMurage-dev';

  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + this.accesstoken)
    // .map(res => res.json());
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=" + this.accesstoken)
    // .map(res => res.json());
  }
  updateProfile(username:string){
    this.username = username;
  }
}
 