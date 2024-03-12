export const resolveZodId = (id: string) => {
  // The string above will be a valid zod id. We have to resolve it based on the prefix
  const prefix = id.split("-")[0];
  switch (prefix) {
    case "A":
      return "ACCOUNT";
    case "M":
      return "MERCHANT";
    case "P":
      return "PERSON";
    case "T":
      return "TRANSACTION";
    case "U":
      return "USER";
    case "C":
      return "CATEGORY";
    default:
      return "UNKNOWN";
  }
};

export const resolveAccountType = (id: string) => {
  return resolveZodId(id) as "ACCOUNT" | "MERCHANT" | "PERSON";
};
