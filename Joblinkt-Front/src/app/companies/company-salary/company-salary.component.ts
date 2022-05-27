import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  position: string;
  level: string;
  average: number;
  min: number;
  max: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: "Software Developer", level:"Junior",average:750,min:600,max:1000},
  {position: "Software Developer", level:"Medior",average:1300,min:1000,max:1600},
  {position: "Product Menager", level:"Senior",average:2000,min:1600,max:2300},
];
@Component({
  selector: 'app-company-salary',
  templateUrl: './company-salary.component.html',
  styleUrls: ['./company-salary.component.scss']
})

export class CompanySalaryComponent implements OnInit {
  displayedColumns: string[] = ['position', 'level', 'average', 'min','max'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
