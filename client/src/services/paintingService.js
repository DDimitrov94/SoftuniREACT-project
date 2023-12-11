import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/paintings'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (paintingId) => {
    const result = await request.get(`${baseUrl}/${paintingId}`, );

    return result;
}

export const getLatest = async () => {
    const query = new URLSearchParams({
        offset: 0,
        pageSize: 4,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

export const create = async (paintingData) => {
    const result = await request.post(baseUrl, paintingData);

    return result;
};

export const edit = async (paintingId, paintingData) => {
    const result = await request.put(`${baseUrl}/${paintingId}`, paintingData);

    return result;
};

export const remove = async (paintingId) => request.remove(`${baseUrl}/${paintingId}`);
