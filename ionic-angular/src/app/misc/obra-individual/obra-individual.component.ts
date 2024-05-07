import { Component, Input, OnInit } from '@angular/core';
import { ObraCardVariant, ObraType, variants } from './ObraTypes';

@Component({
  selector: 'app-obra-individual',
  templateUrl: './obra-individual.component.html',
})
export class ObraIndividualComponent implements OnInit {
  @Input() title!: string;
  @Input() id!: number;
  @Input() image!: string;
  @Input() variant!: ObraCardVariant;
  @Input() type!: ObraType;

  colors: { bg: string; text: string; imgTone: string };

  constructor() {
    this.colors = this.getVariant();
  }

  ngOnInit() {}

  getVariant() {
    return variants[this.variant];
  }

  classes(...args: string[]) {
    return args.join(' ');
  }
}
