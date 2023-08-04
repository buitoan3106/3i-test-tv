import { Montserrat, Merriweather, Noto_Serif, Inter, Oswald } from "next/font/google";

export const fontBase = Montserrat({ 
    subsets: ["vietnamese"] 
});

export const blogFont = Merriweather({
    subsets: ["vietnamese"],
    weight: "400"
});

export const blogTitleFont = Noto_Serif({
    subsets: ["vietnamese"]
})

export const blogDescriptionFont = Inter({
    subsets: ["vietnamese"]
})

export const systemStructure = Oswald({
    subsets: ["vietnamese"]
})