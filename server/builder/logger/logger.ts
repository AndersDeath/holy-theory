import { LOGGER_DICTIONARY } from "./logger.dictionary";

export class Logger {
  private static instance: Logger;

  constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public test(): void {
    this.log("Logger works");
  }

  public info(messageCode: string): void {
    if (!LOGGER_DICTIONARY[messageCode]) {
      this.log("Logger: no message in dictionary");
      return;
    }
    this.log("Info: " + LOGGER_DICTIONARY[messageCode]);
  }

  public log(message: string): void {
    console.log("Log: " + message);
  }

  public time(message: string): void {
    console.time("Time log: " + message);
  }

  public timeEnd(message: string): void {
    console.timeEnd("Time log: " + message);
  }

  public throwError(message: string): void {
    console.error("Message: " + message);
    throw new Error("Error: " + message);
  }
}
