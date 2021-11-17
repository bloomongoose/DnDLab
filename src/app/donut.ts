export interface Donut {
    id: number;
    ref:string;
    name:string;
    calories:number;
    extras:string[];
    photo:string;
    photo_attribution:string;
}

export interface DonutMain {
    id: number;
    ref: string;
    name: string;
}
