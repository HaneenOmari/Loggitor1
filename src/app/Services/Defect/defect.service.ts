import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Defect } from '../../models/defect.model';
@Injectable({
  providedIn: 'root'
})
export class DefectService {
 // private serviceUrl = '../../assets/mockData/datademo1.JSON';
 // private serviceUrl = 'https://amdocslogs.herokuapp.com/ViewDefects'; // Ahmad najar
  private serviceUrl = 'https://amdocslogfiles.herokuapp.com/ViewDefects/15/1'; // mahmoud darwesh
  private BaseUrl = 'https://amdocslogfiles.herokuapp.com/ViewDefects/';
  constructor(private http: HttpClient ) { }
  getDefect(page: Number , pageSize: Number ): Observable<Defect[]> {
    return this.http.get<Defect[]>(this.BaseUrl + pageSize + '/' + page);
  }

  setServiceUrlCust(urlCost: string) {
    // this.serviceUrlCust = urlCost;
    this.serviceUrl = urlCost;
  }
}
