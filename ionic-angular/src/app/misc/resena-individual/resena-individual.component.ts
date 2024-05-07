import { Component, Input, OnInit } from '@angular/core';
import ObraResena from './ObraResena';

@Component({
  selector: 'app-resena-individual',
  templateUrl: './resena-individual.component.html',
})
export class ResenaIndividualComponent implements OnInit {
  @Input() username!: string;
  @Input() userImg!: string;
  @Input() rating!: number;
  @Input() review!: string;
  @Input() obra!: ObraResena;

  like: boolean;

  constructor() {
    this.like = false;
  }

  ngOnInit() {}

  toggleLike() {
    console.log('like');
    this.like = !this.like;
  }
}
