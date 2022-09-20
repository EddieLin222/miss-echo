export type menuType = {
  textArea: TextAreaType;
  menuList: MenuListItem[];
}

export type TextAreaType = {
  title: string;
  content: string;
}

export type MenuListItem = {
  img: string;
  link: string;
}