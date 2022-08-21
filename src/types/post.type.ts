export type PostType = {
    available:boolean;
    post_id: string;
    category_id: string;
    category?: string;
    title: string;
    date: string;
    img: string;
    intro: string;
    content: string;
    epilogue: string;
    nextPostTitle: string;
    nextPostLink: string;
}

export type PostCategoryType = {
    postCategory_id: string;
    postCategory_name: string;
}