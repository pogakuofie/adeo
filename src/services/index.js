import axios from 'axios';

const fetchAdeoData = async () => {
    try {
        const { data } = await axios.get(
            'https://adeo.app/api/questions/get?level_id=1&course_id=1&limit=30',
        );

        return data;
    } catch (e) {
        console.error(e);
    }
};

export default fetchAdeoData;
