export interface Entry {
  title: string;
  link: string;
  section?: string;
  entryLink: string;
  content?: string;
  type?: string;
  sort?: number | null;
  ignore?: boolean;
}
