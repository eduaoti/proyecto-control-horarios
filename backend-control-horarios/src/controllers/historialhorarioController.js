const HistorialHorario = require('../models/HistorialHorario');

const historialHorarioController = {
  create: async (req, res) => {
    try {
      const nuevoHistorialHorario = new HistorialHorario(req.body);
      const historialHorarioGuardado = await nuevoHistorialHorario.save();
      res.status(201).json({
        message: 'Historial de horario creado exitosamente',
        historialHorarioId: historialHorarioGuardado._id
      });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear un nuevo historial de horario', detalle: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const historialesHorario = await HistorialHorario.find();
      res.status(200).json(historialesHorario);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todos los historiales de horario', detalle: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const historialHorario = await HistorialHorario.findById({ NombreEmpleado: req.params.nombre });
      if (historialHorario) {
        res.status(200).json(historialHorario);
      } else {
        res.status(404).json({ error: 'Historial de horario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el historial de horario', detalle: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const historialHorarioActualizado = await HistorialHorario.findByIdAndUpdate({ NombreEmpleado: req.params.nombre }, req.body, { new: true });
      if (historialHorarioActualizado) {
        res.status(200).json(historialHorarioActualizado);
      } else {
        res.status(404).json({ error: 'Historial de horario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el historial de horario', detalle: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const historialHorarioEliminado = await HistorialHorario.findByIdAndDelete({ NombreEmpleado: req.params.nombre });
      if (historialHorarioEliminado) {
        res.status(200).json({
          message: 'Historial de horario eliminado exitosamente',
          historialHorarioId: historialHorarioEliminado._id
        });
      } else {
        res.status(404).json({ error: 'Historial de horario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el historial de horario', detalle: error.message });
    }
  }
};

module.exports = historialHorarioController;
