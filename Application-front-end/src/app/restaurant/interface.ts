export interface Food {
	id?: number;
    name?: string;
    price?: number;
    photo?: string;
    description?: string;
    created_at?: Date;
    updated_at?: Date;
    isAvailable?: boolean;
    ingredients?:Ingredient[];
}
export interface Ingredient {
	id:number;
    created_at?: Date;
    updated_at?: Date
    price: number
    quantity: number,
    product_name: string,
    cout_production?: number,
    foods_id:number,
    product_neededs_id: number,
    product?: Product[]
}
export interface Product{
	id: number;
    created_at?: Date;
    updated_at?: Date;
    name: string;
    price: number;
    quantity_available?:string; 
    describe?: string;
    unity?:string;
    photo?:string 
}

export interface FoodsReturn{
    created_at?: string
    foods_id?: string
    id?: string
    product_neededs_id?:string
    quantity?: string
    updated_at?:string
}

