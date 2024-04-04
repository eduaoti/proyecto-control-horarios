const Turno = require('../models/turno');

const turnoController = {
  create: async (req, res) => {
    try {
      const nuevoTurno = new Turno(req.body);
      const turnoGuardado = await nuevoTurno.save();
      res.status(201).json({
        message: 'Turno creado exitosamente',
        turnoId: turnoGuardado._id
      });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear un nuevo turno', detalle: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const turnos = await Turno.find();
      res.status(200).json(turnos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todos los turnos', detalle: error.message });
    }
  },

  getByNombre: async (req, res) => {
    try {
      const turno = await Turno.findOne({ nombreTurno: req.params.nombreTurno });
      if (turno) {
        res.status(200).json(turno);
      } else {
        res.status(404).json({ error: 'Turno no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el turno', detalle: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const turnoActualizado = await Turno.findOneAndUpdate(
        { nombreTurno: req.params.nombreTurno },  
        req.body,
        { new: true }
      );

      if (turnoActualizado) {
        res.status(200).json(turnoActualizado);
      } else {
        res.status(404).json({ error: 'Turno no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el turno', detalle: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const turnoEliminado = await Turno.findByIdAndDelete({ nombreTurno: req.params.nombreTurno });
      if (turnoEliminado) {
        res.status(200).json({
          message: 'Turno eliminado exitosamente',
          turnoId: turnoEliminado._id
        });
      } else {
        res.status(404).json({ error: 'Turno no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el turno', detalle: error.message });
    }
  }
};

module.exports = turnoController;
