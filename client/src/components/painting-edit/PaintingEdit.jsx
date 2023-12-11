import { useNavigate, useParams } from 'react-router-dom';

import * as paintingService from '../../services/paintingService';
import { useEffect, useState } from 'react';

export default function paintingEdit() {
    const navigate = useNavigate();
    const { paintingId } = useParams();
    const [painting, setPainting] = useState({
        title: '',
        category: '',
        imageUrl: '',
        summary: '',
    });

    useEffect(() => {
        paintingService.getOne(paintingId)
            .then(result => {
                setPainting(result);
            });
    }, [paintingId]);

    const editPaintingSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await paintingService.edit(paintingId, values);

            navigate('/paintings');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    const onChange = (e) => {
        setPainting(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={editPaintingSubmitHandler}>
                <div className="container">
                    <h1>Create painting</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={painting.title} onChange={onChange} placeholder="Enter painting title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={painting.category} onChange={onChange} placeholder="Enter painting category..." />

                    <label htmlFor="painting-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={painting.imageUrl} onChange={onChange} placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" value={painting.summary} onChange={onChange} id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Edit painting" />
                </div>
            </form>
        </section>
    );
}
