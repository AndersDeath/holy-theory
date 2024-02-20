export const PREBUILD_INIT = "PREBUILD_INIT";
export const POSTBUILD_INIT = "POSTBUILD_INIT";

const dict = {
  PREBUILD_INIT: "Pre build init",
  POSTBUILD_INIT: "Post build init",
};

export class Logger {
  private static instance: Logger;

  private constructor() {
    // Private constructor to prevent direct instantiation
  }

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
    if (!dict[messageCode]) {
      console.log("Logger: no message in dictionary");
      return;
    }
    console.log('Info: ',dict[messageCode]);
  }
}
