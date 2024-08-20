import {IComment} from "@/widjets/Card/model/IComment.ts";

export interface ICard {
    image: string;
    date: string;
    comments: IComment[];
    title: string;
    description: string;
    tags: string[];
    readingTime: string;
}