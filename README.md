# ControlHorarios

# Descripcion
Aplicación web mediante la cual se lleve el registro de empleados y asignaciones utilizando el framework de Angular y librerías de Gantt
## Historias de Usuario 
### Empleado

- **HI-USE-001:** Como empleado, quiero poder solicitar mi horario para el próximo mes, eligiendo el tipo de turno que prefiero. La solicitud debe activarse automáticamente durante la última semana de cada mes.

- **HI-USE-002:** Como empleado, deseo visualizar mi horario mensual en formato de Gantt para tener una representación clara y visual de mis turnos de trabajo.

- **HI-USE-003:** Después de elegir mi turno deseado, la función de confirmación debe ser rápida y eficiente. Además, la aplicación debe notificarme vía correo electrónico sobre el resultado de mi solicitud (aprobada o rechazada).

- **HI-USE-004:** Como empleado, quiero solicitar vacaciones a través de la aplicación, indicando las fechas deseadas. La aplicación debe mostrar visualmente los días disponibles para solicitar vacaciones.

- **HI-USE-005:** Como empleado, deseo acceder a un historial de mis horarios anteriores para referencia y planificación personal.

- **HI-USE-006:** Como empleado, quiero visualizar y gestionar los documentos personales almacenados en el sistema, como contratos o certificaciones.

### Administrador

- **HI-USA-001:** Como administrador, quiero gestionar y ajustar el número de empleados permitidos en cada tipo de turno para garantizar una distribución equitativa de recursos.

- HI-USA-002: Como administrador, deseo asignar periodos de training dentro del calendario de los empleados para mejorar sus habilidades y conocimientos.

- HI-USA-003: Como administrador, quiero registrar nuevos empleados y realizar cambios en sus horarios cuando sea necesario para mantener actualizada la información del personal.

- HI-USA-004: La aplicación debe generar automáticamente el horario mensual para cada empleado basándose en el contrato y turno elegido, evitando asignar días de trabajo o descanso en los días de training o vacaciones y continuando con el patrón interrumpido.

- HI-USA-005: La aplicación debe permitir a los administradores visualizar los horarios de los empleados en formato de Gantt, utilizando una librería existente, libre y actualizada.

### Super Administrador

- **HI-USS-001:** Como super administrador, quiero visualizar y seleccionar la lista de todos los administradores y la región que están administrando, para llevar un control efectivo.

- **HI-USS-002:** Como super administrador, al seleccionar a un administrador, deseo visualizar todos los empleados que administra el administrador seleccionado.

- **HI-USS-003:** Como super administrador, quiero visualizar las jornadas de trabajo de cada empleado para determinar el mejor tiempo para sus vacaciones.

- **HI-USS-004:** Como super administrador, quiero dar de alta nuevos usuarios administradores y otros tipos de usuarios. Quiero recibir alertas sobre posibles problemas de rendimiento o seguridad en la aplicación para tomar medidas proactivas y mantener la estabilidad del sistema.

- **HI-USS-005:** Como super administrador, necesito tener la capacidad de realizar copias de seguridad y restaurar datos en caso de pérdida o errores críticos, para asegurar la disponibilidad y la integridad de la información del sistema.

# Vistas

## Barra de navegacion Empleado

Elementos:  Boton a Inicio, Boton para realizar solicitudes, tanto de cambio turno, como de vacaciones. y un ultimo boton para redirigir los usuarios a su respectiva grafica Gantt.

## Barra de navegacion Administrador

Elementos: Boton a Inicio, Boton para redirigir a la vista de Administracion de empleados, otro boton para reviasr las solicitudes y un boton para revisar la grafica gantt generada.

## INICIO

Boton en la pagina superior derecha para ingresar, en la parte superior izquierda se encuentra el logo. Abajo abarcando gran parte de la vista el logo y el lema de la aplicacion.

## INICIO DE SESION

Dos campos donde se solicita ingresar el correo electronico y la contraseña. 

## PAGINA DE BIENVENIDA

La barra de navegacion del Empleado y un texto en blanco para dar la bienvenida al usuario y una pequeña frase.

## EMPLEADO

### SOLICITUD DE EMPLEADO HORARIO 

La ciudad y departamento o Area se calculan automaticamente. Existe un campo para agregar una descripcion opcional para el cambio de horario. Se podra ver el Turno actual y su horario, al igual que los diferentes turnos y horarios que se cuentan.

### SOLICITUD DE EMPLEADO VACACIONES 

La ciudad y departamento o Area se calculan automaticamente. Existe un campo para agregar una descripcion opcional para el cambio de horario. Ademas se muestran los dias dias disponibles y dias restantes para ser tomados como vacaciones.

## SUPERADMIN / ADMIN / ROOT

### CRUD EMPLEADO 

Es un formulario con los campos: Nombre, Apellido paterno y materno, fecha de nacimiento, corre, region, la cual por defecto sera la del administrador, Area de trabajo, departamento, el contrato, fecha inicial y final del turno que tendra el empleado, la descripcion de su horario de training teniendo la fecha, y sus horarios, ademas del nombre del administrador encargado y la fecha de su ingreso.

### CRUD AREA 

Un formulario el cual se solicite el nombre del area y descripcion. 

### CRUD CIUDAD /SEDE 

Un formulario el cual se solicite el nombre de la ciudad.

### CRUD USUARIOS

Un formulario que solicite el nombre del administrador, su correo, la contraseña, la region, este seria con un combo y el siguiente campo seria contralado solamente por los super-admistradores y es el campo de los permisos de super-admistrador.

### CRUD ACTIVIDADES VAC/TRAINING/WORKDAY 
Se accederan a las actividades desde la barra de navigacion del admistrador. Para cada campo (Trainig y Workday) se tendra un3                                                                                                                  formulario para asignar a un empleado sus horarios para workday y training que al guardar los cambios se mande una notificacion via correo electronico de la asignacion.

### Grafico de Gantt

La grafica GANTT genera en una vista aparte por cada usuario seleccionado.

Cada campo anteriormente visto es filtrado por desde un boton localizado debajo de la barra de navegacion. 

### SOLICITUDES VAC/TURNO 

En este apartado se podra llegar desde la barra de navegacion del administrador y se mostrara una tabla con el nombre, turno, fecha de termino y las respectivas acciones controladas por 2 botones “Rechazar” y ”Aceptar”.

### CARGA MASIVA 

Otra vista aparte donde se permite arrastrar archivos .xlsx, .csv, etc. o bien al dar click en el apartado donde se puede arrastrar se abra una pestaña del explorador de archivos y desde ahi poder cargar los archivos.
