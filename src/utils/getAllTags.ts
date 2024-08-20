import { cardData} from "@/widjets/Cards/models/Cards.data.ts";

export function getAllTags(): string[] {
    const tags: string[] = [];
    cardData.forEach((card) => {
        tags.push(...card.tags)
    })
    console.log()
   return [...new Set(tags)]
}