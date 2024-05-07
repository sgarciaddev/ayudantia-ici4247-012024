import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resena-ind',
  templateUrl: './resena-ind.page.html',
})
export class ResenaIndPage implements OnInit {
  id: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ?? this.id;
  }
}
