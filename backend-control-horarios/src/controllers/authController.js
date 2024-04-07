const jwt = require('jsonwebtoken');
const Empleado = require('../models/Empleado');
const Administrador = require('../models/Administrador');

const authController = {
    login: async (req, res) => {
        try {
            // Auth para el empleado
            const { email, password } = req.body;
            const empleado = await Empleado.findOne({ Correo: email });
            if (empleado && empleado.Contrasena === password) {
                const token = jwt.sign({ 
                    Nombre: empleado.Nombre,
                    AppE: empleado.AppE,
                    ApmE: empleado.ApmE,
                    FechaNac: empleado.FechaNac,
                    Correo: empleado.Correo,
                    Contrasena: empleado.Contrasena,
                    Region: empleado.Region,
                    AreaTrabajo: empleado.AreaTrabajo,
                    Departamento: empleado.Departamento,
                    Contrato: empleado.Contrato,
                    TurnoActual: empleado.TurnoActual,
                    HorarioTraining: empleado.HorarioTraining,
                    NombreAdmin: empleado.NombreAdmin,
                    FechaIngreso: empleado.FechaDeIngreso,
                    Role: "Empleado"
                }, process.env.JWT_SECRET, { expiresIn: '1h' });
                return res.status(200).json({ 
                    token,
                    Nombre: empleado.Nombre,
                    AppE: empleado.AppE,
                    ApmE: empleado.ApmE,
                    FechaNac: empleado.FechaNac,
                    Correo: empleado.Correo,
                    Contrasena: empleado.Contrasena,
                    Region: empleado.Region,
                    AreaTrabajo: empleado.AreaTrabajo,
                    Departamento: empleado.Departamento,
                    Contrato: empleado.Contrato,
                    TurnoActual: empleado.TurnoActual,
                    HorarioTraining: empleado.HorarioTraining,
                    NombreAdmin: empleado.NombreAdmin,
                    FechaIngreso: empleado.FechaDeIngreso,
                    Role: "Empleado",  });   
            }

            // Auth para el superadministrador
            const superadministrador = await Administrador.findOne({ CorreoAdmin: email });
            if (superadministrador && superadministrador.Contrasena === password && superadministrador.root === "true") {
                const token = jwt.sign({ 
                    NombreAdmin: superadministrador.NombreAdmin,
                    CorreoAdmin: superadministrador.CorreoAdmin,
                    Contraseña: superadministrador.Contrasena,
                    Region: superadministrador.Region,
                    root: superadministrador.root,
                    Role: "Superadministrador"
                }, process.env.JWT_SECRET, { expiresIn: '3h' });
                return res.status(200).json({ 
                    token, 
                    NombreAdmin: superadministrador.NombreAdmin,
                    CorreoAdmin: superadministrador.CorreoAdmin,
                    Contraseña: superadministrador.Contrasena,
                    Region: superadministrador.Region,
                    root: superadministrador.root,
                    Role: "Superadministrador"
                 });
            }

            // Auth para el administrador
            const administrador = await Administrador.findOne({ CorreoAdmin: email});
            if (administrador && administrador.Contrasena === password && administrador.root === "false" ){
                const token = jwt.sign({
                    NombreAdmin: superadministrador.NombreAdmin,
                    CorreoAdmin: superadministrador.CorreoAdmin,
                    Contraseña: superadministrador.Contrasena,
                    Region: superadministrador.Region,
                    root: superadministrador.root,
                    Role: "Administrador"
                }, process.env.JWT_SECRET, {expiresIn: '2h'});
                return res.status(200).json({ 
                    token, 
                    NombreAdmin: superadministrador.NombreAdmin,
                    CorreoAdmin: superadministrador.CorreoAdmin,
                    Contraseña: superadministrador.Contrasena,
                    Region: superadministrador.Region,
                    root: superadministrador.root,
                    Role: "Administrador"
                 })
            }

            return res.status(401).json({ message: 'Credenciales inválidas' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error en el servidor' });
        }
    },
    
    logout: (req, res) => {
        res.status(200).json({ message: 'Sesión cerrada exitosamente' });
    },

    getUserData: (req, res) => {
        try {
            // Obtener el token del encabezado de la solicitud
            const token = req.headers.authorization.split(' ')[1];
            
            // Verificar si el token es válido
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            
            // Devolver los datos del usuario
            res.status(200).json(decodedToken);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener datos del usuario' });
        }
    }
}

module.exports = authController;
