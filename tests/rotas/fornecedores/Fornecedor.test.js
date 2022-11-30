jest.mock('../../../api/rotas/fornecedores/TabelaFornecedor')
const Fornecedor = require('../../../api/rotas/fornecedores/Fornecedor')

describe('classe Fornecedor', () => {
  test('o método validar() retorna true', () => {
    const fornecedor = new Fornecedor({
      empresa: 'Gatito',
      email: 'contato@gatito.com',
      categoria: 'brinquedos'
    })

    console.log(fornecedor.validar())

    expect(fornecedor.validar()).toBe(true)
  })

  test('o método criar() for executado com sucesso', async () => {
    const fornecedor = new Fornecedor({
      empresa: 'Gatito',
      email: 'contato@gatito.com',
      categoria: 'brinquedos'
    })

    await fornecedor.criar()

    expect(fornecedor.id).toBe(1)
    expect(fornecedor.empresa).toBe('Gatito')
    expect(fornecedor.email).toBe('contato@gatito.com')
    expect(fornecedor.categoria).toBe('brinquedos')
    expect(fornecedor.dataCriacao).toBe('29/11/2022')
    expect(fornecedor.dataAtualizacao).toBe('29/11/2022')
    expect(fornecedor.versao).toBe(30)
  })

  test('o método carregar() for executado com sucesso', async () => {
    const fornecedor = new Fornecedor({ id: 1 })

    await fornecedor.carregar()

    expect(fornecedor.id).toBe(1)
    expect(fornecedor.empresa).toBe('Gatito')
    expect(fornecedor.email).toBe('contato@gatito.com')
    expect(fornecedor.categoria).toBe('brinquedos')
    expect(fornecedor.dataCriacao).toBe('29/11/2022')
    expect(fornecedor.dataAtualizacao).toBe('29/11/2022')
    expect(fornecedor.versao).toBe(30)
  })

  test('o método atualizar() for executado com sucesso', async () => {
    const fornecedor = new Fornecedor({
      id: 1,
      categoria: 'ração'
    })

    await fornecedor.atualizar()

    expect(fornecedor.id).toBe(1)
    expect(fornecedor.categoria).toBe('ração')
  })

  test('o método remover() for executado com sucesso', async () => {
    const fornecedor = new Fornecedor({ id: 1 })

    await fornecedor.remover()

    expect(fornecedor.id).toBe(1)
  })
})
