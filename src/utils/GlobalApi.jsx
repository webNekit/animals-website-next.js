import axios from "axios";

export const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL + "/api",
        headers: {
        'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_STRAPI_API_TOKEN,
        'Content-type': 'application/json',
    }
});

// // connect with API token
// const params = {
//     baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL + "/api",
//     headers: {
//         'Authorization': 'Bearer' + process.env.NEXT_PUBLIC_STRAPI_API_TOKEN,
//         'Content-type': 'application/json',
//     }
// }

// // export const dataFromApi = async(url) => {
// //     try {
// //         const { data } = await axios.get(process.env.NEXT_PUBLIC_STRAPI_API_URL + url, params);
// //         return data;
// //     } catch(error) {
// //         console.log(error);
// //         return error;
// //     }
// // }

