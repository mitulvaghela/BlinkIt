
import { getSanitizedProducts } from './products.helpers';

export const fetchProducts = async () => {
    try{  
    const response = await fetch(`https://dummyjson.com/products?limit=30&skip=0`);
    const data = await response.json();

    return getSanitizedProducts(data?.products);
    }
    catch(error){
        console.log(" unable to fetch products");
    }
}