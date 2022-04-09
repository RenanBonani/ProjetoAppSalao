const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaborador = new Schema({
  nome: {
    type: String,
    required: [true, 'Nome é obrigatorio.']
  },
  dataNascimento: {
    type: String,
    required: [true, 'Data de Nascimento é obrigatorio.']
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
  contaBancaria: {

    titular: {
      type: String,
      required: [true, 'Titular é obrigatorio.']
    },

    cpfCnpj: {
      type: String,
      required: [true, 'Pais é obrigatorio.']
    },
    banco: {
      type: String,
      required: [true, 'Banco é obrigatorio.']
    },

    tipo: {
      type: String,
      required: [true, 'Tipo é obrigatorio.']
    },

    agencia: {
      type: String,
      required: [true, 'Agencia é obrigatorio.']
    },
    numero: {
      type: String,
      required: [true, 'Numero da conta é obrigatorio.']
    },
    digitoVerificador: {
      type: String,
      required: [true, 'Digito verificador é obrigatorio.']
    }
  },
  dataCadastro: {
    type: Date,
    default: Date.now
  }

  recipientId: {
    type: String,
    required: [true, 'É obrigatorio o Id do Recebedor']
  }

});



module.exports = mongoose.model('Colaborador', colaborador);