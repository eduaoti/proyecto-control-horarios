const Contratos = require('../models/Contratos');

const contratosController = {
  create: async (req, res) => {
    try {
      const nuevoContrato = new Contratos(req.body);
      const contratoGuardado = await nuevoContrato.save();
      res.status(201).json({
        message: 'Contrato creado exitosamente',
        contratoId: contratoGuardado._id
      });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear un nuevo contrato', detalle: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const contratos = await Contratos.find();
      res.status(200).json(contratos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todos los contratos', detalle: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const contrato = await Contratos.findOne({TipoContrato: req.params.tipoContrato});
      if (contrato) {
        res.status(200).json(contrato);
      } else {
        res.status(404).json({ error: 'Contrato no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el contrato', detalle: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const contratoActualizado = await Contratos.findOneAndUpdate({TipoContrato: req.params.tipoContrato}, req.body, { new: true });
      if (contratoActualizado) {
        res.status(200).json(contratoActualizado);
      } else {
        res.status(404).json({ error: 'Contrato no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el contrato', detalle: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const contratoEliminado = await Contratos.findOneAndDelete({TipoContrato: req.params.tipoContrato});
      if (contratoEliminado) {
        res.status(200).json({
          message: 'Contrato eliminado exitosamente',
          contratoId: contratoEliminado._id
        });
      } else {
        res.status(404).json({ error: 'Contrato no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el contrato', detalle: error.message });
    }
  }
};

module.exports = contratosController;
