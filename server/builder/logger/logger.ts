import { LOGGER_DICTIONARY } from "./logger.dictionary";

export class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public test(): void {
    console.log("Logger works");
  }

  public info(messageCode: string) {
    if (!LOGGER_DICTIONARY[messageCode]) {
      console.log("Logger: no message in dictionary");
      return;
    }
    console.log("Info: ", LOGGER_DICTIONARY[messageCode]);
  }

  public log(message: string) {
    console.log("Log: ", message);
  }
}
