declare global {
  interface String {
    format(arguments: string[]): string;
    formatAll(arguments: string[]): string;
  }
}

// eslint-disable-next-line prettier/prettier
String.prototype.format = function (...arguments) {
  for (const arg in arguments) {
    if (Array.isArray(arguments[arg])) {
      for (const [index, value] of arguments[arg].entries())
        // eslint-disable-next-line prettier/prettier
        this = this.replace('{' + index + '}', value);
    } else this = this.replace('{' + arg + '}', arguments[arg]);
  }
  return this;
};
String.prototype.formatAll = function (...arguments) {
  for (const arg in arguments) {
    if (Array.isArray(arguments[arg])) {
      for (const [index, value] of arguments[arg].entries())
        this = this.replaceAll('{' + index + '}', value);
    } else this = this.replaceAll('{' + arg + '}', arguments[arg]);
  }
  return this;
};

export {};
