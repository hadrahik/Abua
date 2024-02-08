import { Component, OnInit } from '@angular/core';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-abua';
  constructor(private scrollService: ScrollService) {}
  ngOnInit(): void {
    this.scrollService.scroll$.subscribe((targetId: string) => {
      this.smoothScroll(targetId);
    });
  }

  private smoothScroll(targetId: string): void {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  }
}