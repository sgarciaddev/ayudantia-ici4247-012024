import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estrellas',
  templateUrl: './estrellas.component.html',
})
export class EstrellasComponent implements OnInit {
  @Input() rating!: number;

  entireStars: number[] = [];
  emptyStars: number[] = [];
  hasHalfStar: boolean = false;

  constructor() {}

  calcularEstrellas() {
    this.entireStars = Array.from(
      { length: Math.floor(this.rating) },
      (_, i) => i
    );
    this.hasHalfStar = (this.rating - this.entireStars.length) * 10 > 3;
    this.emptyStars = Array.from(
      { length: 5 - this.entireStars.length - (this.hasHalfStar ? 1 : 0) },
      (_, i) => i
    );
  }

  ngOnInit() {
    this.calcularEstrellas();
  }
}
