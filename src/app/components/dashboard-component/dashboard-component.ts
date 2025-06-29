import { Component, HostListener, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatIconModule } from '@angular/material/icon';
import { EmpPerormanceComponent } from '../employee-performance/employee-performance';
import { EmpSummaryComponent } from '../employee-summary/employee-summary';
import { TotalEmployees } from '../total-employees/total-employees';
import { RecentActivity } from '../recent-activity/recent-activity';

@Component({
  selector: 'app-dashboard-component',
  imports: [
    NgxChartsModule,
    MatIconModule,
    EmpPerormanceComponent,
    EmpSummaryComponent,
    TotalEmployees,
    RecentActivity,
  ],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent implements OnInit {
  data = [
    { name: 'HR', value: 25 },
    { name: 'Engineering', value: 70 },
    { name: 'Sales', value: 40 },
    { name: 'Marketing', value: 30 },
  ];
  performanceData = [
    { name: 'Excellent', value: 25 },
    { name: 'Good', value: 35 },
    { name: 'Average', value: 20 },
    { name: 'Below Average', value: 10 },
    { name: 'Poor', value: 10 },
  ];

  colorScheme = 'vivid';
  view: [number, number] = [550, 300];

  ngOnInit() {
    this.updateChartView();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.updateChartView();
  }

  updateChartView() {
    const width = window.innerWidth;

    // Extra small devices (phones, less than 576px)
    if (width < 576) {
      // Example: iPhone SE (375px)
      this.view = [300, 200];
    }
    // Small devices (tablets, 576px and up)
    else if (width < 768) {
      // Example: iPad Mini portrait (600px)
      this.view = [300, 250];
    }
    // Medium devices (desktops, 768px and up)
    else if (width < 992) {
      // Example: iPad Air landscape (820px)
      this.view = [450, 300];
    }
    // Large devices (large desktops, 992px and up)
    else {
      // Example: Full HD monitor (1920px)
      this.view = [550, 300];
    }
  }
}
