import create from 'zustand';
import {devtools} from "zustand/middleware";


export type AppState = {
    count: number;
    theme: 'light' | 'dark';
    inc: () =>void;
}


 export const  useStore =  create<AppState>(devtools((set)=>({
    count:1,
    theme:"light",
    inc: () =>set(s =>({ count: s.count+1 })),
})))


