const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const horario = new Schema({

  salaoID: {
    type: mongoose.Types.ObjectId,
    ref: 'Salao',
    required: true
  },
  especialidades: [{
    type: mongoose.Types.ObjectId,
    ref: 'Servico',
    required: true
  }],
  colaboradores: [{
    type: mongoose.Types.ObjectId,
    ref: 'Colaborador',
    required: [true, 'Necessario cadastrar pelo menos um colaborador.']
  }],
  dias: {
    type: [Number],
    required: [true, 'Necessario cadastrar pelo menos um colaborador.']
  },
  inicio: {
    type: Date,
    required: [true, 'Necessario cadastrar o inicio do horario.']
  },
  fim: {
    type: Date,
    required: [true, 'Necessario cadastrar o fim do horario.']
  },

  dataCadastro: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Horario', horario);