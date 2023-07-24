describe('Transacoes', () => {

    beforeEach(() => {
        cy.visit("https://devfinance-agilizei.netlify.app/")
    });

    it('Verificar titulo', () => {
        cy.title().should('equal', 'dev.finance$')
    });

    it('Cadastrar entrada', () => {
        criarTransacao("Salario", 3000, "2023-07-03")

        cy.get("tbody tr td.description").should("have.text", "Salario");

    });

    it('Cadastrar saída', () => {
        criarTransacao("Farmacia", -290, "2023-07-05")

        cy.get("tbody tr td.description").should("have.text", "Farmacia");
    });

});


function criarTransacao(descricao, valor, data) {
    cy.contains("Nova Transação").click()

    cy.get('#description').type(descricao)

    cy.get('#amount').type(valor)

    cy.get('#date').type(data)

    cy.contains("Salvar").click()
}