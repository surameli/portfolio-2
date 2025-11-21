import { clsx } from "clsx";
import { twmerge } from "tailwind-merge";



export const cn = (...inputs) =>{
    return twmerge(clsx(inputs));
}