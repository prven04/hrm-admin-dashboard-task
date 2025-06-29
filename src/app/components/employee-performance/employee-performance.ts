import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-employee-performance',
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    NgxChartsModule,
  ],

  templateUrl: './employee-performance.html',
  styleUrl: './employee-performance.css',
})
export class EmpPerormanceComponent {
  @Input() performanceData: { name: string; value: number }[] = [];
  @Input() colorScheme: string = 'vivid';
  @Input() view: [number, number] = [550, 300];
}
