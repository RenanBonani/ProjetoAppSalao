const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema({

  nome: {
    type: String,
    required: [true, 'Nome é obrigatorio.']
  },

  telefone: {
    type: String,
    required: [true, 'Telefone é obrigatorio.']
  },

  dataNascimento: {
    type: String,
    required: [true, 'Data de Nascimento é obrigatorio.']
  },

  email: {
    type: String,
    required: [true, 'E-mail é obrigatorio.']
  },

  sexo: {
    type: String,
    enum: ['M', 'F'],
    required: [true, 'Sexo é obrigatorio.']
  },

  foto: {
    type: String,
    default: null
  },

  status: {
    type: String,
    enum: ['A', 'I'],
    default: 'A'
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

  dataCadastro: {
    type: Date,
    default: Date.now
  },

  documento: {
    tipo: {
      type: String,
      enum: ['cpf', 'cnpj'],
      required: [true, 'Tipo do documento é obrigatorio.']
    },
    numero: {
      type: String,
      required: [true, 'Numero do documento é obrigatorio.']
    }
  }
});



module.exports = mongoose.model('Cliente', cliente);