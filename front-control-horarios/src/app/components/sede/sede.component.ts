import { Component, OnInit } from '@angular/core';
import { Sede } from '../../models/sede';
import { SedeService } from '../../services/sede.service';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css'],
})
export class SedesComponent implements OnInit {
  sedes: Sede[] = [];
  sede: Sede | any = {}
  modoEdicion: boolean = false;

  constructor(private sedeService: SedeService) { }

  ngOnInit(): void {
    this.cargarSedes();
  }
  cargarSedes(){
    this.sedeService.getSede().subscribe(sedesData =>{
      this.sedes = sedesData
    });
  }

  cancelarEdicion() {
    this.modoEdicion = false;
    this.sede = {}
  }

  guardarSede() {
    if (!this.validarCampos()) {
      console.log('Por favor complete todos los campos.');
      return;
    }

    if (this.modoEdicion) {
      const region: string = this.sede.region.valueOf();
      this.sedeService.actualizarSede(region, this.sede).subscribe(() => {
        this.cargarSedes();
        this.resetForm();
      });
    } else {
      this.sedeService.crearSede(this.sede).subscribe(() => {
        this.cargarSedes();
        this.resetForm();
      });
    }
  }

  validarCampos(): boolean {
    return (
      this.sede.region && // Verifica que la región no esté vacía
      this.sede.pais // Verifica que el nombre no esté vacío
    );
  }

  resetForm(){
    this.sede = {};
    this.modoEdicion = false
  }

  editarSede(sedeData: Sede){
    this.modoEdicion = true;
    this.sede = {
      ...sedeData
    }
    const formElement = document.querySelector('.form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  eliminarSede(id: string){
    this.sedeService.eliminarSede(id).subscribe(()=>{
      this.cargarSedes();
    })
  }
}
