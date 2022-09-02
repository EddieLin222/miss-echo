export type ServiceDataType = {
    introduction:string;
    partner: {
        img: string;
        info: string;
    },
    event: {
        img: string;
        info: string;
    },
    reduce: {
        img: string;
        info: string;
    },
}

export type ServiceIntroType = {  //array
    title: string;
    content:string;
    img: string;
    link: string;
}

export type CompanyType = {  //array
    img: string;
    name: string;
    text: string;
}

