const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salao = new Schema({
  nome: {
    type: String,
    required: [true, 'Nome é obrigatorio.']
  },
  foto: {
    type: String,
    default: null
  },
  capa: {
    type: String,
    default: null
  },
  email: {
    type: String,
    required: [true, 'E-mail é obrigatorio.']
  },
  senha: {
    type: String,
    required: [true, 'Senha é obrigatorio.']
  },
  telefone: {
    type: String,
    required: [true, 'Telefone é obrigatorio.']
  },
  endereco: {
    cidade: {
      type: String,
      required: [true, 'Cidade é obrigatorio.']
    },
    uf: {
      type: String,
      required: [true, 'UF é obrigatorio.']
    },
    cep: {
      type: String,
      required: [true, 'Cep é obrigatorio.']
    },
    numero: {
      type: String,
      required: [true, 'Numero é obrigatorio.']
    },
    pais: {
      type: String,
      required: [true, 'Pais é obrigatorio.']
    }
  },
  geo: {
    tipo: String,
    coordinate: Array,
  },
  dataCadastro: {
    type: Date,
    default: Date.now
  }
});

salao.index({ geo: '2dsphere' })

module.exports = mongoose.model('Salao', salao);