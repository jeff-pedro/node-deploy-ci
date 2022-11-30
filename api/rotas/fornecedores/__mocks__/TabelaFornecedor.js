const Fornecedor = require('../Fornecedor')

module.exports = {
  listar () {
    return []
  },
  inserir (fornecedor) {
    return {
      id: 1,
      dataCriacao: '29/11/2022',
      dataAtualizacao: '29/11/2022',
      versao: 30
    }
  },
  async pegarPorId (id) {
    return {
      id: 1,
      empresa: 'Gatito',
      email: 'contato@gatito.com',
      categoria: 'brinquedos',
      dataCriacao: '29/11/2022',
      dataAtualizacao: '29/11/2022',
      versao: 30
    }
  },
  async atualizar (id, dadosParaAtualizar) {
  },
  async remover (id) {
  }
}
