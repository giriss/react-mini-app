import { omit } from "lodash";

describe("Examine the creation of employees", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3003/#/create");
  });

  it("validates empty submitted fields properly", () => {
    cy.get("[data-cy=saveButton]").click();
    cy.get("[data-cy=firstNameErrorMessage]").should("contain", "Required");
    cy.get("[data-cy=surnameErrorMessage]").should("contain", "Required");
    cy.get("[data-cy=emailErrorMessage]").should("contain", "Required");
  });

  it("validates too long submitted values properly", () => {
    cy.get("[data-cy=firstNameInput]").type(
      "JohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohn"
    );
    cy.get("[data-cy=surnameInput]").type(
      "DoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoe"
    );
    cy.get("[data-cy=emailInput]").type(
      "JohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohn.doe@example.com"
    );
    cy.get("[data-cy=saveButton]").click();
    cy.get("[data-cy=firstNameErrorMessage]").should(
      "contain",
      "The maximum number of characters is 255"
    );
    cy.get("[data-cy=surnameErrorMessage]").should(
      "contain",
      "The maximum number of characters is 255"
    );
    cy.get("[data-cy=emailErrorMessage]").should(
      "contain",
      "The maximum number of characters is 255"
    );
  });

  it("validates age properly", () => {
    cy.get("[data-cy=ageInput]").type(15);
    cy.get("[data-cy=saveButton]").click();
    cy.get("[data-cy=ageErrorMessage]").should(
      "contain",
      "Must be an adult"
    );
  });

  it("validates invalid email address properly", () => {
    cy.get("[data-cy=emailInput]").type("john.doe.example.com");
    cy.get("[data-cy=saveButton]").click();
    cy.get("[data-cy=emailErrorMessage]").should("contain", "Invalid email address");
  });

  it("creates an employee properly", () => {
    cy.get("[data-cy=firstNameInput]").type("John");
    cy.get("[data-cy=surnameInput]").type("Doe");
    cy.get("[data-cy=emailInput]").type("john.doe@example.com");
    cy.get("[data-cy=ageInput]").type(25);
    cy.get("[data-cy=statusInput]").select("Active");
    cy.get("[data-cy=jobTitleInput]").type("Developer");
    cy.get("[data-cy=saveButton]").click();

    cy.window()
      .its("store")
      .invoke("getState")
      .then(state => {
        expect(
          state.employees.map(employee => omit(employee, "id"))
        ).to.eql([
          {
            firstName: "John",
            surname: "Doe",
            email: "john.doe@example.com",
            age: 25,
            status: "ACTIVE",
            jobTitle: "Developer",
          },
        ]);
      });
  });
});
