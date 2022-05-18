export interface Card {
  id: number;
  companyName: string;
  ownerFirstName: string;
  ownerLastName: string;
  dueDate: string;
  issueDate: string;
}

export interface Cards {
  cards: Card[];
}

export const createCardBase = (
  id: number,
  name: string,
  ownerFirstName: string,
  ownerLastName: string,
  dueDate: string,
  issueDate: string
): Card => {
  return {
    id: id,
    companyName: name,
    ownerFirstName: ownerFirstName,
    ownerLastName: ownerLastName,
    dueDate: dueDate,
    issueDate: issueDate,
  };
};

export const createTestCard = (id: number): Card => {
  return {
    id: id,
    companyName: "МГТУ им Баумана",
    ownerFirstName: "Леонид",
    ownerLastName: "Перлин",
    dueDate: "02.02.2020",
    issueDate: "01.02.2020",
  };
};
