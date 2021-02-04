import { Component, OnInit } from '@angular/core';
import { SolicitanteService } from '../../../services/solicitante.service';

@Component({
  selector: 'app-solicitante',
  templateUrl: './solicitante.component.html',
  styleUrls: ['./solicitante.component.css']
})
export class SolicitanteComponent implements OnInit {

  solicitantes: Array<any>; 

  constructor( private solicitanteService: SolicitanteService ) { }

  ngOnInit() {
    this.gotoList();  
  } 

  gotoList() {
    this.solicitanteService.getList().subscribe(s => {
      this.solicitantes = s;      
    });
  }

}
