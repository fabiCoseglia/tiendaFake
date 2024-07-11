import axios from "axios";

const API_BASE_URL =  'https://fakestoreapi.com';

const getAllProducts = async () =>{
    try {
        const res = await axios.get(`${API_BASE_URL}/products?limit=12`);
        if(res){
            
            //Sacando las Categories por producto
            let categories = [];   
            const products = res.data;
            categories = products.reduce((acc, product) => {
                if (!acc.find(cat => cat.title === product.category)) {
                    acc.push({
                        title: product.category,
                        image: product.image
                    });
                }
                return acc;
            }, []);
            
            return {products,categories};
        }else{
            throw console.log('loading data from API...');
        }
    } catch (error) {
       throw console.error('Error fetching products:', error);
    }
};

export default getAllProducts