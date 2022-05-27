import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddJobOfferComponent } from '../add-job-offer/add-job-offer.component';
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
  openViewDialog(event: { stopPropagation: () => void; }) {
    this.dilogRef = this.dialog.open(JobViewComponent, {
      data: {
      }
    });
  }
  openAddDialog(event: { stopPropagation: () => void; }) {
    this.dilogRef = this.dialog.open(AddJobOfferComponent, {
      data: {
      }
    });
  }

}
