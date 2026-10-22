import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-bee',
  standalone: true,
  templateUrl: './bee.component.html',
  styleUrls: ['./bee.component.css'],
})
export class BeeComponent {
  isVisible = false;
  positionX = 12;
  positionY = 24;

  @HostListener('window:scroll')
  updatePosition(): void {
    const scrollY = window.scrollY;
    const beeWidth = Math.min(64, Math.max(42, window.innerWidth * 0.05));
    const leftSide = Math.floor(scrollY / 260) % 2 === 0;
    const scrollPhase = (scrollY % 260) / 260;

    this.isVisible = scrollY > 100;
    this.positionX = leftSide ? 10 : window.innerWidth - beeWidth - 10;
    this.positionY = 18 + scrollPhase * 48;
  }

  @HostListener('window:resize')
  updateForViewport(): void {
    this.updatePosition();
  }
}