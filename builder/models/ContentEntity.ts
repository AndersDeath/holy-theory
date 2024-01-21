export interface ContentEntityModel {
  title: string;
  link: string;
  section?: string;
  entryLink: string;
  content?: string;
  type?: string;
  sort?: number | null;
  ignore?: boolean;
}

export class ContentEntity implements ContentEntityModel {
  title: string;
  link: string;
  section: string;
  entryLink: string;
  content?: string;
  type?: string;
  sort?: number;
  ignore?: boolean;
}
