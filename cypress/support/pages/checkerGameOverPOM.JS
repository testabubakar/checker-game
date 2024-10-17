export class Checkerpomlose {
  verifyCheckersPage() {
    cy.get("h1").should("contain", "Checkers");
  }

  clickRestartButton() {
    cy.get("a").contains("Restart").click();
  }

  selectPiece(position) {
    return cy.get(`[name="space${position}"]`);
  }

  selectPositionToMove(position) {
    return cy.get(`[name="space${position}"]`);
  }

  verifyFailMessage() {
    return cy.get("#message").should("contain", "You lose. Game over.");
  }

  executeGameMoves2() {
    this.verifyCheckersPage();
    this.clickRestartButton();
    this.selectPiece("02").click();
    this.selectPositionToMove("13").click().wait(2000);
    this.selectPiece("42").click();
    this.selectPositionToMove("33").click().wait(2000);
    this.selectPiece("33").click();
    this.selectPositionToMove("24").click().wait(2000);
    this.selectPiece("62").click();
    this.selectPositionToMove("53").click().wait(2000);
    this.selectPiece("53").click();
    this.selectPositionToMove("44").click().wait(2000);
    this.selectPiece("44").click();
    this.selectPositionToMove("35").click().wait(2000);
    this.selectPiece("22").click();
    this.selectPositionToMove("04").click().wait(2000);
    this.selectPiece("04").click();
    this.selectPositionToMove("15").click().wait(2000);
    this.selectPiece("71").click();
    this.selectPositionToMove("62").click().wait(2000);
    this.selectPiece("51").click();
    this.selectPositionToMove("62").click().wait(2000);
    this.selectPiece("31").click();
    this.selectPositionToMove("22").click().wait(2000);
    this.selectPiece("22").click();
    this.selectPositionToMove("13").click().wait(2000);
    this.selectPiece("11").click();
    this.selectPositionToMove("22").click().wait(2000);
    this.selectPiece("00").click();
    this.selectPositionToMove("11").click().wait(2000);
    this.selectPiece("13").click();
    this.selectPositionToMove("24").click().wait(2000);
    this.selectPiece("24").click();
    this.selectPositionToMove("35").click().wait(2000);
    this.selectPiece("20").click();
    this.selectPositionToMove("31").click().wait(2000);
    this.selectPiece("40").click();
    this.selectPositionToMove("31").click().wait(2000);
    this.selectPiece("22").click();
    this.selectPositionToMove("33").click().wait(2000);
    this.selectPiece("31").click();
    this.selectPositionToMove("22").click().wait(2000);
    this.selectPiece("22").click();
    this.selectPositionToMove("13").click().wait(2000);
    this.selectPiece("60").click();
    this.selectPositionToMove("51").click().wait(2000);
    this.selectPiece("13").click();
    this.selectPositionToMove("24").click().wait(2000);
    this.selectPiece("24").click();
    this.selectPositionToMove("35").click().wait(2000);
    this.selectPiece("35").click();
    this.selectPositionToMove("46").click().wait(2000);
    this.verifyFailMessage();
  }
}
