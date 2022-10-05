export function sum(...args) {
  if (args.length === 0) {
    throw Error("summ required at least 1 args");
  }
  return args.reduce((summ, item) => summ + item, 0);
}
