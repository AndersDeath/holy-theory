export const PREBUILD_INIT = "PREBUILD_INIT";
export const POSTBUILD_INIT = "POSTBUILD_INIT";
export const GENERATE_STATIC_INIT = "GENERATE_STATIC_INIT";
export const MD_PARSE_READY = "MD_PARSE_READY"
const dict = {
  PREBUILD_INIT: "Pre build init",
  POSTBUILD_INIT: "Post build init",
  GENERATE_STATIC_INIT: "Generate Static is initialized",
  MD_PARSE_READY: "Parse MD is ready"
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

  public log(message: string) {
    console.log('Log: ',message);
  }
}
