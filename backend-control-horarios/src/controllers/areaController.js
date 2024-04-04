const Area = require('../models/Area.js');

const areaController = {
  create: async (req, res) => {
    try {
      const nuevoArea = new Area(req.body);
      const areaGuardado = await nuevoArea.save();
      res.status(201).json({
        message: 'Area creada exitosamente',
        areaId: areaGuardado._id
      });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear un nueva area', detalle: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const area = await Area.find();
      res.status(200).json(area);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todas las areas', detalle: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const area = await Area.findOne({ NombreArea: req.params.nombreArea });
      if (area) {
        res.status(200).json(area);
      } else {
        res.status(404).json({ error: 'Area no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el area', detalle: error.message });
    }
  },

  update: async (req, res) => {
    try {
       const areaActualizada = await Area.findOneAndUpdate({ NombreArea: req.params.nombreArea }, req.body, { new: true });
       if (areaActualizada) {
          res.status(200).json(areaActualizada);
       } else {
          res.status(404).json({ error: 'Área no encontrada' });
       }
    } catch (error) {
       res.status(500).json({ error: 'Error al actualizar el área', detalle: error.message });
    }
  },
  

  delete: async (req, res) => {
    try {
       const areaEliminada = await Area.findOneAndDelete({ NombreArea: req.params.nombreArea });
       if (areaEliminada) {
          res.status(200).json({
             message: 'Area eliminada exitosamente',
             empleadoId: areaEliminada._id
          });
       } else {
          res.status(404).json({ error: 'Area no encontrada' });
       }
    } catch (error) {
       res.status(500).json({ error: 'Error al eliminar el area', detalle: error.message });
    }
 }
};

module.exports = areaController;
