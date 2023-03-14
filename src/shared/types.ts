export enum SelectedPage {
    Home = "главная",
    Characters = "оперсонажах",
    BackStory = "предыстрория",
    Advantages = "преимущества",
    Comments = "отзывы",
    ContactUs = "обратнаясвязь"
}
export interface CharactersItems {
    id: number,
    title: string,
    description: string,
    image: string
}