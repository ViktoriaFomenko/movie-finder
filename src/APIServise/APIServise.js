import axios from 'axios';


const BASE_URL = '';

const APIServise = async (query, page) => {
    const URL = `${BASE_URL}?q=${query}&page=${page}`;
    const { data } = await axios.get(URL);
    return data;
};

export default APIServise;