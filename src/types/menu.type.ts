// export type menuType = {
//   textArea: TextAreaType;
//   menuList: MenuListItem[];
// }

export type menuType = {
  textArea: BannerAreaType;
  menuList: MenuListItem[];
}

export type BannerAreaType = {
  title: string;
  content: string;
  image: string;
}

// export type MenuListItem = {
//   img: string;
//   link: string;
// }

export type MenuListItem = {
  name: string;
  menu: MenuItem[];
}

export type MenuItem = {
  img: string;
  link: string;
}