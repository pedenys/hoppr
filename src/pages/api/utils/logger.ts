import chalk from "chalk";

const logInfo = (args: unknown) => console.log(chalk.blue(args));
const logError = (args: unknown) => console.log(chalk.red(args));
const logWarning = (args: unknown) => console.log(chalk.yellow(args));

export { logError, logInfo, logWarning };
