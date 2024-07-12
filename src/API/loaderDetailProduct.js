import axios from "axios";

const API_BASE_URL =  'https://fakestoreapi.com';

const getDetailProduct = async ({params}) =>{
    console.log(params);
    try {
        const res = await axios.get(`${API_BASE_URL}/products/${params.id}`);
        if(res){
            const product = res.data;
            return {product};
        }else{
            throw console.log('loading data from API...');
        }
    } catch (error) {
       throw console.error('Error fetching productDetail :', error);
    }
};

export default getDetailProduct