const Administrador = require('../models/Administrador');

const administradorController = {
  create: async (req, res) => {
    try {
      const nuevoAdministrador = new Administrador(req.body);
      const administradorGuardado = await nuevoAdministrador.save();
      res.status(201).json({
        message: 'Administrador creado exitosamente',
        administradorId: administradorGuardado._id
      });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear un nuevo administrador', detalle: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const administradores = await Administrador.find();
      res.status(200).json(administradores);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todos los administradores', detalle: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const administrador = await Administrador.findOne({ NombreAdmin: req.params.nombreAdmin });
      if (administrador) {
        res.status(200).json(administrador);
      } else {
        res.status(404).json({ error: 'Administrador no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el administrador', detalle: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const administradorActualizado = await Administrador.findOneAndUpdate({ NombreAdmin: req.params.nombreAdmin }, req.body, { new: true });
      if (administradorActualizado) {
        res.status(200).json(administradorActualizado);
      } else {
        res.status(404).json({ error: 'Administrador no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el administrador', detalle: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const administradorEliminado = await Administrador.findOneAndDelete({ NombreAdmin: req.params.nombreAdmin });
      if (administradorEliminado) {
        res.status(200).json({
          message: 'Administrador eliminado exitosamente',
          administradorId: administradorEliminado._id
        });
      } else {
        res.status(404).json({ error: 'Administrador no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el administrador', detalle: error.message });
    }
  }
  
};

module.exports = administradorController;
