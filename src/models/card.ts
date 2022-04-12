export interface Card {
  companyName: string;
  ownerFirstName: string;
  ownerLastName: string;
  dueDate: string;
  issueDate: string;
}

export interface Cards {
  cards: Card[];
}

export const createTestCard = (): Card => {
  return {
    companyName: "МГТУ им Баумана",
    ownerFirstName: "Леонид",
    ownerLastName: "Перлин",
    dueDate: "02.02.2020",
    issueDate: "01.02.2020",
  };
};
