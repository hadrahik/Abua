import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private scrollService: ScrollService) {}

  smoothScroll(targetId: string): void {
    this.scrollService.scrollTo(targetId);
  }
}