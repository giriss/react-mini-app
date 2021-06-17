import { saveNewEmployee } from "../../src/redux/employees";

describe("Edition of employees", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3003/#/view");
    cy.window()
      .its("store")
      .invoke("dispatch", saveNewEmployee({
        firstName: "Girishz",
        surname: "Gopaul",
        email: "girish@hide-in.cloud",
        age: 25,
        status: "ACTIVE",
        jobTitle: "Developer",
      }));
    cy.get("[data-cy=editButton]").click();
  });

  it("fills the existing values", () => {
    cy.get("[data-cy=firstNameInput]").should("have.value", "Girishz");
    cy.get("[data-cy=surnameInput]").should("have.value", "Gopaul");
    cy.get("[data-cy=emailInput]").should("have.value", "girish@hide-in.cloud");
    cy.get("[data-cy=ageInput]").should("have.value", 25);
    cy.get("[data-cy=statusInput]").should("have.value", "ACTIVE");
    cy.get("[data-cy=jobTitleInput]").should("have.value", "Developer");
  });

  it("updates values successfuly", () => {
    cy.get("[data-cy=firstNameInput]").type("{backspace}");
    cy.get("[data-cy=saveButton]").click();
    cy.window()
      .its("store")
      .invoke("getState")
      .then(state => {
        expect(state.employees[0].firstName).to.eql("Girish");
      });
  });
});
