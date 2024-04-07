export interface SolicitudHorario {
    NombreEmpleado: string;
    NombreAdmin: string;
    Contrato: string;
    TurnoSolicitado:{
        inicio:String,
        fin:String
    };
    EstadoSolicitud: string;
    Correo: string;
}
