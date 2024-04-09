# ControlHorarios

## Descripción
Aplicación web para el registro y asignación de horarios de empleados, utilizando Angular y una librería de Gantt.

## Historias de Usuario 

### Empleado

- **HI-USE-001:** Solicitar horario mensual.
- **HI-USE-002:** Visualizar horario mensual en formato Gantt.
- **HI-USE-003:** Confirmación rápida de solicitud de horario.
- **HI-USE-004:** Solicitar vacaciones.
- **HI-USE-005:** Acceder al historial de horarios anteriores.
- **HI-USE-006:** Visualizar y gestionar documentos personales.

### Administrador

- **HI-USA-001:** Gestionar número de empleados por turno.
- **HI-USA-002:** Asignar periodos de training a empleados.
- **HI-USA-003:** Registrar nuevos empleados y cambios de horario.
- **HI-USA-004:** Generar horario mensual automáticamente.
- **HI-USA-005:** Visualizar horarios de empleados en formato Gantt.

### Super Administrador

- **HI-USS-001:** Visualizar lista de administradores y regiones.
- **HI-USS-002:** Ver empleados de cada administrador.
- **HI-USS-003:** Visualizar jornadas de trabajo de empleados.
- **HI-USS-004:** Dar de alta nuevos administradores y usuarios.
- **HI-USS-005:** Realizar copias de seguridad y restaurar datos.

## Vistas

### Barra de navegación Empleado
- Botones: Inicio, Solicitudes, Gantt.

### Barra de navegación Administrador
- Botones: Inicio, Gestión empleados, Solicitudes, Gantt.

### INICIO
- Logotipo y lema de la aplicación.

### INICIO DE SESION
- Campos para correo electrónico y contraseña.

### PÁGINA DE BIENVENIDA
- Barra de navegación Empleado y mensaje de bienvenida.

### EMPLEADO

#### SOLICITUD DE EMPLEADO HORARIO 
- Ciudad y departamento calculados automáticamente.
- Campo para descripción opcional.
- Visualización de turnos disponibles.

#### SOLICITUD DE EMPLEADO VACACIONES 
- Ciudad y departamento calculados automáticamente.
- Campos para fechas de vacaciones.

### SUPERADMIN / ADMIN / ROOT

#### CRUD EMPLEADO 
- Formulario con información personal y horarios.

#### CRUD AREA 
- Formulario para añadir áreas de trabajo.

#### CRUD CIUDAD / SEDE 
- Formulario para añadir ciudades.

#### CRUD USUARIOS
- Formulario para añadir usuarios y asignar permisos.

#### CRUD ACTIVIDADES VAC/TRAINING/WORKDAY 
- Formulario para asignar horarios de trabajo y training.

#### Grafico de Gantt
- Generado para cada usuario seleccionado.

#### SOLICITUDES VAC/TURNO 
- Tabla de solicitudes con botones de aceptar y rechazar.

#### CARGA MASIVA 
- Vista para cargar archivos de datos.

## Diagrama de Casos de Uso

## Modelo de la base de datos

- **Administrador**
  - NombreAdmin: String
  - CorreoAdmin: String
  - Contrasena: String
  - Region: String
  - Root: String

- **Area**
  - NombreArea: String
  - Descripcion: String

- **Contratos**
  - TipoContrato: String
  - DiasTrabajados: Number
  - DiasDescansados: Number
  - HorasPorDia: Number
  - TurnosContrato: Array

- **Departamento**
  - NombreDepartamento: String
  - Direccion: 
    - Numero: String
    - Calle: String
    - Colonia: String
    - Cp: String

- **Empleado**
  - Nombre: String
  - AppE: String
  - ApmE: String
  - FechaNac: Date
  - Correo: String
  - Contrasena: String
  - Region: String
  - AreaTrabajo: String
  - Departamento: String
  - Contrato: String
  - TurnoActual: 
    - Inicio: String
    - Fin: String
  - HorarioTraining: 
    - Fecha: Date
    - HoraInicial: String
    - HoraFinal: String
  - NombreAdmin: String
  - FechaDeIngreso: Date

- **HistorialHorario**
  - NombreEmpleado: String
  - FechaInicio: Date
  - FechaFin: Date

- **Sede**
  - Region: String
  - Pais: String

- **SolicitudHorario**
  - NombreEmpleado: String
  - NombreAdmin: String
  - Contrato: String
  - TurnoSolicitado: 
    - Inicio: String
    - Fin: String
  - EstadoSolicitud: String
  - Correo: String

- **SolicitudVacaciones**
  - NombreEmpleado: String
  - FechaSolicitud: 
    - FechaInicioVacaciones: Date
    - FechaTerminoVacaciones: Date
  - EstadoSolicitud: String
  - Descripcion: String

- **Turno**
  - NombreTurno: String
  - HoraFinal: Date
  - HoraInicio: Date
