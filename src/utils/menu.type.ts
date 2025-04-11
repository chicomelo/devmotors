export interface MenuProps{
    objects: ItemMenuProps[];
    total: number
}

interface ItemMenuProps{
    slug: string;
    title: string;
}