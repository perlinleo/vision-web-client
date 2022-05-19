export interface AskRoleForm {
  roleID: number;
  comment: string;
}

export interface AskPassForm {
  roleID: number;
  comment: string;
  expirationDate: Date;
  name: string;
}

export interface AskTimeForm {
  comment: string;
  time: Date;
  passID: string;
}

export interface DeclarationToReact {
  type: number;
  innerID: number;
}
