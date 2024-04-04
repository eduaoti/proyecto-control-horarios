const SolicitudHorario = require('../models/SolicitudHorario');

const solicitudHorarioController = {
  create: async (req, res) => {
    try {
      const nuevaSolicitudHorario = new SolicitudHorario(req.body);
      const solicitudHorarioGuardada = await nuevaSolicitudHorario.save();
      res.status(201).json({
        message: 'Solicitud de horario creada exitosamente',
        solicitudHorarioId: solicitudHorarioGuardada._id
      });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear una nueva solicitud de horario', detalle: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const solicitudesHorario = await SolicitudHorario.find();
      res.status(200).json(solicitudesHorario);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todas las solicitudes de horario', detalle: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const solicitudHorario = await SolicitudHorario.findOne({ Correo: req.params.correo });
      if (solicitudHorario) {
        res.status(200).json(solicitudHorario);
      } else {
        res.status(404).json({ error: 'Solicitud de horario no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la solicitud de horario', detalle: error.message });
    }
  },
  

  update: async (req, res) => {
    try {
      const solicitudHorarioActualizada = await SolicitudHorario.findOneAndUpdate({ Correo: req.params.correo }, req.body, { new: true });
      if (solicitudHorarioActualizada) {
        res.status(200).json(solicitudHorarioActualizada);
      } else {
        res.status(404).json({ error: 'Solicitud de horario no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la solicitud de horario', detalle: error.message });
    }
  },
  

  delete: async (req, res) => {
    try {
      const solicitudHorarioEliminada = await SolicitudHorario.findOneAndDelete({ Correo: req.params.correo });
      if (solicitudHorarioEliminada) {
        res.status(200).json({
          message: 'Solicitud de horario eliminada exitosamente',
          solicitudHorarioId: solicitudHorarioEliminada._id
        });
      } else {
        res.status(404).json({ error: 'Solicitud de horario no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la solicitud de horario', detalle: error.message });
    }
  },
  
};

module.exports = solicitudHorarioController;
