import axios from 'axios';

let instance = axios.create({
    // url: 'https://mobian-api.jieoukeji.com/api/admin/setting/beginnersGuide',
    timeout: 1000,
    headers: {
        'content-type': 'application/json',
    }
});