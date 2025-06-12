import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-header',
  imports: [NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit,OnDestroy {
dateTime: string = '';
  private intervalId?: number;

  ngOnInit(): void {
  if (typeof window !== 'undefined') {
    this.updateDateTime();
    this.intervalId = window.setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }
}

ngOnDestroy(): void {
  if (typeof window !== 'undefined' && this.intervalId) {
    clearInterval(this.intervalId);
  }
}

  private updateDateTime(): void {
    this.dateTime = new Date().toLocaleTimeString('ka-GE', {
      timeZone: 'Asia/Tbilisi',
      weekday:"long",
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }
}