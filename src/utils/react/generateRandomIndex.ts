import { assoc } from "../js/assoc";

// nanoid
export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

// generateRandomString создаст один-единственный id для всех итераций
export const assignId = assoc('id', generateRandomString());

export const generateId = <O extends object>(obj: O) =>
  // assignId(obj);
  assoc('id', generateRandomString())(obj);
