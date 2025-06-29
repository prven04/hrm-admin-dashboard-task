import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-employee-summary',
  imports: [NgxChartsModule],
  templateUrl: './employee-summary.html',
  styleUrl: './employee-summary.css',
})
export class EmpSummaryComponent implements OnInit {
  @Input() data: { name: string; value: number }[] = [];
  @Input() colorScheme: string = 'vivid';
  @Input() view: [number, number] = [550, 300];

  ngOnInit(): void {}
}
