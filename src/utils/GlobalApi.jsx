import axios from "axios";

// connect with API token
const params = {
    headers: {
        'Authorization': 'Bearer' + process.env.NEXT_PUBLIC_STRAPI_API_TOKEN,
        'Content-type': 'application/json',
    }
}

export const dataFromApi = async(url) => {
    try {
        const { data } = await axios.get(process.env.NEXT_PUBLIC_STRAPI_API_URL + url, params);
        return data;
    } catch(error) {
        console.log(error);
        return error;
    }
}