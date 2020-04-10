import express from "express";

import fetchDataFromServerEveryMinute from "./fetchData";

import site from "./site";
import api from "./api";

const server = express();

server
    .disable("x-powered-by")
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
    .use(express.urlencoded({extended: true}))
    .use('/api/v1', api)
    .get('/*', site);

fetchDataFromServerEveryMinute();

export default server;
