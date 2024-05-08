import { Component, OnInit } from '@angular/core';
import { resenasDisponibles } from 'src/data/resenas';

@Component({
  selector: 'app-resenas-recientes',
  templateUrl: './resenas-recientes.component.html',
})
export class ResenasRecientesComponent implements OnInit {
  resenasRecientes = resenasDisponibles;

  constructor() {}

  ngOnInit() {}
}
