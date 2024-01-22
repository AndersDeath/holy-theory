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

  constructor(
    title: string,
    link: string,
    entryLink: string,
    section: string,
    content: string,
    type: string,
    sort: number,
    ignore: boolean
  ) {
    this.title = title;
    this.link = link;
    this.entryLink = entryLink;
    this.section = section;
    this.content = content;
    this.type = type;
    this.sort = sort;
    this.ignore = ignore;
  }
}
