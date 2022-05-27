import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobViewComponent } from '../job-view/job-view.component';

@Component({
  selector: 'app-company-jobs',
  templateUrl: './company-jobs.component.html',
  styleUrls: ['./company-jobs.component.scss']
})
export class CompanyJobsComponent implements OnInit {
  dilogRef: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openAddDialog(event: { stopPropagation: () => void; }) {
    this.dilogRef = this.dialog.open(JobViewComponent, {
      data: {
      }
    });
  }

}
