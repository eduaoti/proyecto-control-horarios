const Sede = require('../models/Sede');

const sedeController = {
  create: async (req, res) => {
    try {
      const nuevaSede = new Sede(req.body);
      const sedeGuardada = await nuevaSede.save();
      res.status(201).json({
        message: 'Sede creada exitosamente',
        sedeId: sedeGuardada._id
      });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la sede', detalle: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const sedes = await Sede.find();
      res.status(200).json(sedes);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todas las sedes', detalle: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const sede = await Sede.findOne({ region: req.params.region });
      if (sede) {
        res.status(200).json(sede);
      } else {
        res.status(404).json({ error: 'Sede no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la sede', detalle: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const sedeActualizada = await Sede.findOneAndUpdate({ region: req.params.region }, req.body, { new: true });
      if (sedeActualizada) {
        res.status(200).json(sedeActualizada);
      } else {
        res.status(404).json({ error: 'Sede no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la sede', detalle: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const sedeEliminada = await Sede.findOneAndDelete({ region: req.params.region });
      if (sedeEliminada) {
        res.status(200).json({
          message: 'Sede eliminada exitosamente',
          sedeId: sedeEliminada.region
        });
      } else {
        res.status(404).json({ error: 'Sede no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la sede', detalle: error.message });
    }
  }
};

module.exports = sedeController;
