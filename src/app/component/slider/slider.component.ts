import { Component, OnInit } from '@angular/core';

interface Slide {
  id: number;
  content: string;
  imageUrl: string; 
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  currentIndex = 0;
  slides: Slide[] = [
    { id: 1, content: '', imageUrl: 'https://images.unsplash.com/photo-1617096745151-a9a4a58a33ba?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, content: '', imageUrl: 'https://images.unsplash.com/photo-1566769745191-cd26a9147e29?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, content: '', imageUrl: 'https://images.unsplash.com/photo-1570909034071-13a9b29807d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    // Agrega más slides según sea necesario
  ];

  constructor() { }

  ngOnInit(): void {
    this.startAutoPlay();
  }

  showSlide(index: number): void {
    this.currentIndex = index;
    this.resetAutoPlay();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.resetAutoPlay();
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.resetAutoPlay();
  }

  private startAutoPlay(): void {
    setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  private resetAutoPlay(): void {
    // Reinicia el temporizador para evitar cambios automáticos después de la interacción manual
  }
}

