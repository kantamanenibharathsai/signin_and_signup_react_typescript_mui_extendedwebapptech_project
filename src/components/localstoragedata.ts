export interface userObject {
    userId: number;
    userEmail: string;
    userName: string;
    userPassword: string;
  }
  
  export const localStorageParsedData: userObject[] = JSON.parse(
    localStorage.getItem("usersArray") ?? "[]"
  );
  
  // The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand
  // when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.