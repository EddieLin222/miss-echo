export type BannerType = {
    webImg: string;
    mobileImg?: string;
}

export type PodcastType = {
    mainImg: string;
    intro: string;
    lists: PodcastItemType[];
}
export type PodcastItemType = { //array
    title: string;
    date: string;
    content: string;
    link: string;
}

export type YoutubeType = { //array
    iframeLink: string;
    watchTimes: string;
    date: string;
    title: string;
    person: string;

}
export type SalonType = { 
    img: string;
    title: string;
    intro: string;
    link: string;   
}