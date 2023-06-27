import ShortUniqueId from "short-unique-id";

// create shortid for page
export function createShortid( length:number=11 ) {
    const uid = new ShortUniqueId({ length })
    return uid()
}