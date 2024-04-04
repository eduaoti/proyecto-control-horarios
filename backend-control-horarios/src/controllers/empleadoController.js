const Empleado = require('../models/Empleado');

const empleadoController = {
   create: async (req, res) => {
      try {
        // Verificar si ya existe un empleado con el mismo correo electrónico
        const empleadoExistente = await Empleado.findOne({ Correo: req.body.Correo });
        if (empleadoExistente) {
          return res.status(400).json({ error: 'Ya existe un empleado con este correo electrónico' });
        }
  
        // Si el correo electrónico no está duplicado, crear y guardar el nuevo empleado
        const nuevoEmpleado = new Empleado(req.body);
        const empleadoGuardado = await nuevoEmpleado.save();
        res.status(201).json({
          message: 'Empleado creado exitosamente',
          empleadoId: empleadoGuardado._id
        });
      } catch (error) {
        res.status(500).json({ error: 'Error al crear un nuevo empleado', detalle: error.message });
      }
    },
    
    verificarCorreoExistente : async (req, res) => {
      try {
        const { correo } = req.params;
        const empleado = await Empleado.findOne({ Correo: correo });
        res.json({ existe: !!empleado });
      } catch (error) {
        console.error('Error al verificar el correo electrónico:', error);
        res.status(500).json({ mensaje: 'Error al verificar el correo electrónico' });
      }
    },

   getAll: async (req, res) => {
      try {
        const empleados = await Empleado.find();
        res.status(200).json(empleados);
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener todos los empleados', detalle: error.message });
      }
    },

    getById: async (req, res) => {
      try {
        const empleado = await Empleado.findOne({ Correo: req.params.correo });
        if (empleado) {
          res.status(200).json(empleado);
        } else {
          res.status(404).json({ error: 'Empleado no encontrado' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener el empleado', detalle: error.message });
      }
    },
    
    
    
    

   update: async (req, res) => {
      try {
         const empleadoActualizado = await Empleado.findByIdAndUpdate(req.params.correo, req.body, { new: true });
         if (empleadoActualizado) {
            res.status(200).json(empleadoActualizado);
         } else {
            res.status(404).json({ error: 'Empleado no encontrado' });
         }
      } catch (error) {
         res.status(500).json({ error: 'Error al actualizar el empleado', detalle: error.message });
      }
   },

   delete: async (req, res) => {
      try {
         const empleadoEliminado = await Empleado.findOneAndDelete({ Correo: req.params.correo });
         if (empleadoEliminado) {
            res.status(200).json({
               message: 'Empleado eliminado exitosamente',
               empleadoId: empleadoEliminado._id
            });
         } else {
            res.status(404).json({ error: 'Empleado no encontrado' });
         }
      } catch (error) {
         res.status(500).json({ error: 'Error al eliminar el empleado', detalle: error.message });
      }
   }
   
};

module.exports = empleadoController;
