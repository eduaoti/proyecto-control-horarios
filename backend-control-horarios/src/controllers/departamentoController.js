const Departamento = require('../models/Departamento');

const departamentoController = {
  create: async (req, res) => {
    try {
      const nuevoDepartamento = new Departamento(req.body);
      const departamentoGuardado = await nuevoDepartamento.save();
      res.status(201).json({
        message: 'Departamento creado exitosamente',
        departamentoId: departamentoGuardado._id
      });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear un nuevo departamento', detalle: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const departamentos = await Departamento.find();
      res.status(200).json(departamentos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todos los departamentos', detalle: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const departamento = await Departamento.findById({ NombreDepartamento: req.params.nombre });
      if (departamento) {
        res.status(200).json(departamento);
      } else {
        res.status(404).json({ error: 'Departamento no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el departamento', detalle: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const departamentoActualizado = await Departamento.findByIdAndUpdate({ NombreDepartamento: req.params.nombre }, req.body, { new: true });
      if (departamentoActualizado) {
        res.status(200).json(departamentoActualizado);
      } else {
        res.status(404).json({ error: 'Departamento no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el departamento', detalle: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const departamentoEliminado = await Departamento.findByIdAndDelete({ NombreDepartamento: req.params.nombre });
      if (departamentoEliminado) {
        res.status(200).json({
          message: 'Departamento eliminado exitosamente',
          departamentoId: departamentoEliminado._id
        });
      } else {
        res.status(404).json({ error: 'Departamento no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el departamento', detalle: error.message });
    }
  }
};

module.exports = departamentoController;
