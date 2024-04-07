import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../../services/administrador.service';
import { Administrador } from '../../models/administrador';
import { CorreoService } from '../../services/correo.service';
import { Correo } from '../../models/correo';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { SedeService } from '../../services/sede.service';

@Component({
  selector: 'app-crud-admin',
  templateUrl: './crud-admin.component.html',
  styleUrls: ['./crud-admin.component.css']
})
export class CrudAdminComponent implements OnInit {
  administradores: Administrador[] = [];
  administrador: Administrador | any = {};
  modoEdicion: boolean = false;
  nombreBusqueda: string = '';
  sedes: any[] = []

  constructor(
    private administradorService: AdministradorService,
    private correoService: CorreoService,
    private sedesServices: SedeService
  ) { }

  ngOnInit(): void {
    this.cargarAdministradores();
    this.getSedes();
  }

  cancelarEdicion() {
    this.modoEdicion = false;
    this.administrador = {}
  }

  cargarAdministradores() {
    this.administradorService.getAdministrador().subscribe(admins => {
      this.administradores = admins;
    });
  }

  guardarAdministrador() {
    // Verificar si algún campo obligatorio está vacío
    if (!this.administrador.NombreAdmin || !this.administrador.CorreoAdmin || !this.administrador.Contrasena || !this.administrador.Region) {
      alert('Por favor, complete todos los campos obligatorios.');
      return; // Detener la ejecución del método
    }

    if (this.modoEdicion) {
      const nombre: string = this.administrador.NombreAdmin.valueOf();
      const correo: string = this.administrador.CorreoAdmin.valueOf();

      // Actualizar el administrador
      this.administradorService.actualizarAdministrador(nombre, this.administrador).subscribe(() => {
        this.cargarAdministradores();

        this.enviarNotificacion(
          'Datos actualizados',
          'Se informa que la información de su cuenta como ADMINISTRADOR de GanttFlow ha sido modificada',
          correo
        );
        this.resetForm();
      });
    } else {
      // Enviar el correo
      const correo: string = this.administrador.CorreoAdmin.valueOf();

      // Guardar el nuevo administrador
      this.administradorService.crearAdministrador(this.administrador).subscribe(() => {
        this.cargarAdministradores();
        this.resetForm();
        this.enviarNotificacion(
          'Cuenta como Administrador creada',
          'La cuenta para Gantt Flow ha sido creada exitosamente.',
          correo
        );
      });
    }
  }





  editarAdministrador(admin: Administrador) {
    this.modoEdicion = true;
    this.administrador = { ...admin };
  }

  eliminarAdministrador(id: string) {
    this.administradorService.eliminarAdministrador(id).subscribe(() => {
      this.cargarAdministradores();
    });
  }

  resetForm() {
    this.administrador = {};
    this.modoEdicion = false;
  }

  buscarAdministrador(): void {
    if (this.nombreBusqueda.trim() !== '') {
      this.administradorService.obtenerUnAdministrador(this.nombreBusqueda).subscribe((data: any) => {
        this.administradores = [data];
      });
    } else {
      this.cargarAdministradores();
    }
  }

  enviarNotificacion(asunto: string, mensaje: string, correo: string): void {
    const correoData = {
      asunto: asunto,
      mensaje: mensaje,
      correo: correo
    };

    this.correoService.envioCorreo(correoData).subscribe(
      () => {
        console.log('Correo enviado con éxito');
        console.log(correoData)
      },
      error => {
        console.error('Error al enviar el correo:', error);
        console.log(correoData)
        }
    );
}

getSedes() {
  this.sedesServices.getSede().subscribe(sedess=>{
    this.sedes = sedess
    console.log(this.sedes)
  })
}


}
