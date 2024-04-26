export interface RawContent {
  category: string;
  metadata: any;
  content: string;
  folderPath: string;
}

export interface Config {
  sourceRootPath: string;
  htmlOutputPath: string;
}
