# ControlHorarios

# Descripcion
Aplicación web mediante la cual se lleve el registro de empleados y asignaciones utilizando el framework de Angular y librerías de Gantt
## Historias de Usuario 
### Empleado

HI-USE-001: Como empleado, quiero poder solicitar mi horario para el próximo mes, eligiendo el tipo de turno que prefiero. La solicitud debe activarse automáticamente durante la última semana de cada mes.

HI-USE-002: Como empleado, deseo visualizar mi horario mensual en formato de Gantt para tener una representación clara y visual de mis turnos de trabajo.

HI-USE-003: Después de elegir mi turno deseado, la función de confirmación debe ser rápida y eficiente. Además, la aplicación debe notificarme vía correo electrónico sobre el resultado de mi solicitud (aprobada o rechazada).

HI-USE-004: Como empleado, quiero solicitar vacaciones a través de la aplicación, indicando las fechas deseadas. La aplicación debe mostrar visualmente los días disponibles para solicitar vacaciones.

HI-USE-005: Como empleado, deseo acceder a un historial de mis horarios anteriores para referencia y planificación personal.

HI-USE-006: Como empleado, quiero visualizar y gestionar los documentos personales almacenados en el sistema, como contratos o certificaciones.

### Administrador

HI-USA-001: Como administrador, quiero gestionar y ajustar el número de empleados permitidos en cada tipo de turno para garantizar una distribución equitativa de recursos.

HI-USA-002: Como administrador, deseo asignar periodos de training dentro del calendario de los empleados para mejorar sus habilidades y conocimientos.

HI-USA-003: Como administrador, quiero registrar nuevos empleados y realizar cambios en sus horarios cuando sea necesario para mantener actualizada la información del personal.

HI-USA-004: La aplicación debe generar automáticamente el horario mensual para cada empleado basándose en el contrato y turno elegido, evitando asignar días de trabajo o descanso en los días de training o vacaciones y continuando con el patrón interrumpido.

HI-USA-005: La aplicación debe permitir a los administradores visualizar los horarios de los empleados en formato de Gantt, utilizando una librería existente, libre y actualizada.

### Super Administrador

HI-USS-001: Como super administrador, quiero visualizar y seleccionar la lista de todos los administradores y la región que están administrando, para llevar un control efectivo.

HI-USS-002: Como super administrador, al seleccionar a un administrador, deseo visualizar todos los empleados que administra el administrador seleccionado.

HI-USS-003: Como super administrador, quiero visualizar las jornadas de trabajo de cada empleado para determinar el mejor tiempo para sus vacaciones.

HI-USS-004: Como super administrador, quiero dar de alta nuevos usuarios administradores y otros tipos de usuarios. Quiero recibir alertas sobre posibles problemas de rendimiento o seguridad en la aplicación para tomar medidas proactivas y mantener la estabilidad del sistema.

HI-USS-005: Como super administrador, necesito tener la capacidad de realizar copias de seguridad y restaurar datos en caso de pérdida o errores críticos, para asegurar la disponibilidad y la integridad de la información del sistema.
