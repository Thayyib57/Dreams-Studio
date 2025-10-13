import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Header } from "../header/header";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Footer } from "../footer/footer"; 

interface Slide {
  image: string;
  alt: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, RouterModule, CommonModule, Footer],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit, OnDestroy {

  slides: Slide[] = [
    { image: 'assets/images/sample1.jpg', alt: 'Wedding Photography' },
    { image: 'assets/images/sample2.jpg', alt: 'Portrait Photography' },
    { image: 'assets/images/sample3.jpg', alt: 'Event Photography' }
  ];

  currentIndex = 0;
  intervalId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.clearAutoSlide();
  }

  private startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
      this.cdr.markForCheck();    // 🔥 force Angular to update UI
    }, 5000);
  }

  private clearAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.restartAutoSlide();
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex === 0) ? this.slides.length - 1 : this.currentIndex - 1;
    this.restartAutoSlide();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : this.currentIndex + 1;
    this.restartAutoSlide();
  }

  private restartAutoSlide(): void {
    this.startAutoSlide();
    this.clearAutoSlide();
  }
}