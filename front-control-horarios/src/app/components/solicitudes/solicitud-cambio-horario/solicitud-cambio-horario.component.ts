import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Contrato } from '../../../models/contrato';
import { ContratoService } from '../../../services/contrato.service';
import { Empleado } from '../../../models/empleado';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import * as jwtDecode from 'jwt-decode';
import { SolicitudHorario } from '../../../models/solicitudHorario';
import { SolicitudhorarioService } from '../../../services/solicitudhorario.service';
import { CorreoService } from '../../../services/correo.service';
import { AdministradorService } from '../../../services/administrador.service';
import { Administrador } from '../../../models/administrador';

@Component({
  selector: 'app-solicitud-cambio-horario',
  templateUrl: './solicitud-cambio-horario.component.html',
  styleUrls: ['./solicitud-cambio-horario.component.css']
})
export class SolicitudCambioHorarioComponent implements OnInit {

  @ViewChild('alerta') alertaElement: ElementRef | any;

  empleados: any[] = [];
  empleado: Empleado | any = {};
  contratos: Contrato[] = [];
  contrato: Contrato | any = {};
  contratoSeleccionado: Contrato | any;
  solicitud: SolicitudHorario | any = {}
  token: string | undefined;
  cookie: boolean | undefined;
  tokenDecodificado: any;
  turnoSeleccionado: any = {}
  horarioIncorrecto: boolean = false;
  admin: Administrador | any
  correoAdmin: string = ''

  constructor(
    private contratoService: ContratoService,
    private cookieService: CookieService,
    private router: Router,
    private solicitudHorarioService: SolicitudhorarioService,
    private correoService: CorreoService,
    private adminServices: AdministradorService
  ) {}

  ngOnInit(): void {
    this.token = this.cookieService.get('token');
    this.cookie = this.cookieService.check('token');
    this.tokenDecodificado = jwtDecode.jwtDecode(this.token);


    // Obtener contratos del empleado basado en el tipo de contrato del token
    this.contratoService.getContrato().subscribe((contratos: Contrato[]) => {
      // Filtrar los contratos disponibles para el tipo de contrato del empleado
      this.contratos = contratos.filter(
        (contrato: Contrato) => contrato.TipoContrato === this.tokenDecodificado.Contrato
      );
      
    });
    this.obtenerContratos();
    this.prepararSolicitud()
    console.log(this.contrato)
    this.obtenerCorreoAdmin()
  }

  obtenerContratos() {
    this.contratoService.getContrato().subscribe(
      (data) => {
        this.contratos = data;
        
        this.contratos = data.filter(
          (contrato: Contrato) => contrato.TipoContrato === this.tokenDecodificado.Contrato
        );
        this.contratoSeleccionado = this.contratos[0];
      },
      (error) => {
        console.error('Error al obtener los contratos:', error);
      }
    );
  }

  prepararSolicitud(){
    this.solicitud.NombreEmpleado = this.tokenDecodificado.Nombre +' '+  this.tokenDecodificado.AppE + ' ' + this.tokenDecodificado.ApmE
    this.solicitud.NombreAdmin = this.tokenDecodificado.NombreAdmin
    this.solicitud.Contrato = this.tokenDecodificado.Contrato
    this.solicitud.EstadoSolicitud = 'En Revision'
    this.solicitud.Correo = this.tokenDecodificado.Correo
  }

  asignarHorario() {
    if (
      this.turnoSeleccionado.inicio === this.tokenDecodificado.TurnoActual.inicio &&
      this.turnoSeleccionado.fin === this.tokenDecodificado.TurnoActual.fin
      
    ) {
      this.horarioIncorrecto = true;
      if (this.alertaElement) {
        setTimeout(() => {
          this.alertaElement.nativeElement.classList.add('cerrar');
        }, 2000); // Cambia este valor a 3000 para que desaparezca después de 3 segundos
      }
      return;
      // Ocultar la alerta después de 2-3 segundos
    }
    this.horarioIncorrecto = false
    this.solicitud.Turno = this.turnoSeleccionado;
  }



  enviarSolicitud() {
    console.log(this.solicitud)
    this.solicitudHorarioService.crearSolicitudHorario(this.solicitud).subscribe(()=>{
      this.enviarNotificacion(
        'SOLICITUD RECIBIDA',
        'holoooooo ya nos llego tu notificacion en un rato lo vemos',
        this.tokenDecodificado.Correo
      )

      const correo: string = this.admin.CorreoAdmin.valueOf();
      this.enviarNotificacion(
        'SOLICITUD RECIBIDA',
        `hOLOOOOOOO ${this.tokenDecodificado.Nombre} pidio un cammbio en su fokin horario`,
        correo
      )
    });
  
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

  obtenerCorreoAdmin(){
    if (this.tokenDecodificado.NombreAdmin.trim() !== '') {
      this.adminServices.obtenerUnAdministrador(this.tokenDecodificado.NombreAdmin).subscribe((data: any) => {
        this.admin = data;
        console.log(this.admin)
        this.correoAdmin = this.admin.correoAdmin
      });
    }
    console.log(this.correoAdmin)
  }
}
