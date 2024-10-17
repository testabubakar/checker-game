import { Checkerpom } from "../support/pages/checkerWinPOM";
import { Checkerpomlose } from "../support/pages/checkerGameOverPOM";

describe("CheckMate Game", () => {
  const checkobj = new Checkerpom();
  const gameover = new Checkerpomlose();
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should select position and moves then verify game are win", () => {
    checkobj.executeGameMoves();
  });
  it.only("Should select position and moves then verify game are lose", () => {
    gameover.executeGameMoves2();
  });
});
