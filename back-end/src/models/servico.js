const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servico = new Schema({

  salaoID: {
    type: mongoose.Types.ObjectId,
    ref: 'Salao'
  },
  titulo: {
    type: String,
    required: [true, 'Titulo é obrigatorio.']
  },
  foto: {
    type: String,
    default: null
  },
  preco: {
    type: Number,
    required: [true, 'Preço é obrigatorio.']
  },
  duracao: {
    type: Number, //Duração em minutos
    required: [true, 'Duração é obrigatorio.']
  },
  comissao: {
    type: Number,  // % de comissão sobre o preço
    default: null
  },
  recorrencia: {
    type: Number, // Periodo de refação do serviço em dias
    default: null
  },
  descricao: {
    type: String,
    default: null
  },
  status: {
    type: String,
    enum: ['A', 'I', 'E'],
    required: [true, 'Status do serviço é obrigatorio.']
  },
  dataCadastro: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Servico', servico);