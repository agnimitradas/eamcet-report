import { Component, OnInit } from '@angular/core';
import { GridDataService } from '../shared/shared.exports';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [GridDataService]
})
export class GridComponent implements OnInit {

  columnDefs:Array<Object>;
  rowData: Array<Object>;
  constructor(private _gridDataService:GridDataService) { }

  ngOnInit() {
    this.columnDefs = [
      {headerName: 'Student Name', field: 'studentName' },
      {headerName: 'Student ID', field: 'studentId' },
      {headerName: 'Student Rank', field: 'studentRank'},
      {headerName: 'Region', field: 'region' },
      {headerName: 'District', field: 'district' },
      {headerName: 'City', field: 'city' },
      {headerName: 'College', field: 'college' }
  ];
   
    this._gridDataService.getGridData()
        .subscribe(data=>{
          console.table(data);
          this.rowData = data;
        },error=>{
          console.error(error);
        })
  }


}
