export enum SelectedPage {
    Home = "главная",
    Characters = "оперсонажах",
    BackStory = "предыстрория",
    Advantages = "преимущества",
    Comments = "отзывы",
    ContactUs = "обратнаясвязь" ,
    FireNationAnim = "начало",
    GhostAvatarAnim = "пропажа",
    FindingAangAnim = "новаянадежда",
    AangOnGoraAnim = "началопутешествия"
}
export interface CharactersItems {
    id: number,
    title: string,
    description: string,
    image: string
}
export type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export type FormValues = {
    name: string;
    phone: string;
    email: string;
    message: string;
};

export type FormErrors = {
    name: string;
    phone: string;
    email: string;
    message: string;
};


