// custom types

export type project = {
  img: string;
  appURL: string;
  appURLImg: string;
  repoURL: string;
  repoURLImg: string;
  name: string;
  altImg?: string;
  about?: string;
}

export type course = {
  id: string;
  name: string;
  date: Date;
  about?: string[];
  altImg?: string;
}

export type studyCenter = {
  type: string;
  name: string;
  certificate: string;
  altImg?: string;
  courses?: course[];
  about?: string[];
}

export type paragraph = {
  title?: string;
  paragraph: string[];
}

export type data = {
  textSection?: string[];
  text?: paragraph[];
  textBtn?: object;
  textIcon?: object;
  textImg?: object;
  study?: studyCenter[];
  project?: project[];
}

export type section = {
  id: string;
  textId?: string;
  data?: data;
}
