import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-m-info',
  templateUrl: './m-info.component.html',
  styleUrls: ['./m-info.component.css']
})
export class MInfoComponent {
  constructor(private scrollService: ScrollService) {}

  smoothScroll(targetId: string): void {
    this.scrollService.scrollTo(targetId);
  }
}
