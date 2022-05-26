import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

  get historial(){
    return this.gifsService.historial;
  }

  buscar(dato:string)
  {
    this.gifsService.buscarGifs(dato);
  }
}
