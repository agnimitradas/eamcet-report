import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class GridDataService{
    baseUrl = './assets/'

    constructor(private _http:Http){}

    getGridData():Observable<any>{
        let url= this.baseUrl + 'eamcetReport.json';
        return this._http.get(url)
                .map((response:Response)=>{
                    return response.json();
                })
    }
}