export class Checkerpom {
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

  verifyWinMessage() {
    return cy.get("#message").should("contain", "You have won!");
  }

  executeGameMoves() {
    this.verifyCheckersPage();
    this.clickRestartButton();
    this.selectPiece("02").click();
    this.selectPositionToMove("13").click().wait(2000);
    this.selectPiece("11").click();
    this.selectPositionToMove("02").click().wait(2000);
    this.selectPiece("00").click();
    this.selectPositionToMove("11").click().wait(2000);
    this.selectPiece("42").click();
    this.selectPositionToMove("24").click().wait(2000);
    this.selectPiece("31").click();
    this.selectPositionToMove("42").click().wait(2000);
    this.selectPiece("42").click();
    this.selectPositionToMove("53").click().wait(2000);
    this.selectPiece("22").click();
    this.selectPositionToMove("44").click().wait(2000);
    this.selectPiece("24").click();
    this.selectPositionToMove("35").click().wait(2000);
    this.selectPiece("13").click();
    this.selectPositionToMove("35").click().wait(2000);
    this.selectPiece("11").click();
    this.selectPositionToMove("22").click().wait(2000);
    this.selectPiece("20").click();
    this.selectPositionToMove("11").click().wait(2000);
    this.selectPiece("40").click();
    this.selectPositionToMove("31").click().wait(2000);
    this.selectPiece("22").click();
    this.selectPositionToMove("13").click().wait(2000);
    this.selectPiece("13").click();
    this.selectPositionToMove("04").click().wait(2000);
    this.selectPiece("35").click();
    this.selectPositionToMove("26").click().wait(2000);
    this.selectPiece("26").click();
    this.selectPositionToMove("17").click().wait(2000);
    this.selectPiece("04").click();
    this.selectPositionToMove("26").click().wait(2000);
    this.selectPiece("31").click();
    this.selectPositionToMove("42").click().wait(2000);
    this.selectPiece("36").click();
    this.selectPositionToMove("37").click().wait(2000);
    this.selectPiece("37").click();
    this.selectPositionToMove("46").click().wait(2000);
    this.selectPiece("26").click();
    this.selectPositionToMove("37").click().wait(2000);
    this.selectPiece("37").click();
    this.selectPositionToMove("46").click().wait(2000);
    this.selectPiece("02").click();
    this.selectPositionToMove("24").click().wait(2000);
    this.selectPiece("02").click();
    this.selectPositionToMove("24").click().wait(2000);
    this.selectPiece("11").click();
    this.selectPositionToMove("33").click().wait(2000);
    this.verifyWinMessage();
  }
}
