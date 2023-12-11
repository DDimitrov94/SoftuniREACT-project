import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (paintingId) => {
    const query = new URLSearchParams({
        where: `paintingId="${paintingId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (paintingId, text) => {
    const newComment = await request.post(baseUrl, {
        paintingId,
        text,
    });

    return newComment;
};
