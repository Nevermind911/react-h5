import React from "react";
import Index from '../views/Index';
import SharePage from '../views/SharePage';

const routers = [
    { path: '/', component: <Index/> },
    { path: '/sharePage', component: <SharePage/> },
]

export default routers;