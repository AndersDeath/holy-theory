export interface RawContent {
  category: string;
  metadata: any;
  content: string;
  folderPath: string;
  fileName: string;
}

export interface Config {
  sourceRootPath: string;
  htmlOutputPath: string;
}
