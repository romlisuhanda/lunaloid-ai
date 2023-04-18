import chalk from 'chalk';

export function log(args){
  return chalk(chalk.bgBlue.white('[•]'), chalk.blue(args))
}

export function error(args){
  return chalk(chalk.bgRed.white('[•]'), chalk.red(args))
}

export function success (args){
  return chalk(chalk.bgGreen.white('[•]'), chalk.green(args))
}