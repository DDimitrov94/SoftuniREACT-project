import { useNavigate } from 'react-router-dom';

import * as paintingService from '../../services/paintingService';

export default function AddPainting() {
    const navigate = useNavigate();
    
    const createpaintingSubmitHandler = async (e) => {
        e.preventDefault();

        const paintingData = Object.fromEntries(new FormData(e.currentTarget));

        await paintingService.create(paintingData);

        navigate('/paintings');
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createpaintingSubmitHandler}>
                <div className="container">
                    <h1>Add Painting</h1>
                    <label htmlFor="leg-title">Name:</label>
                    <input type="text" id="title" name="title" placeholder="Name your ART" />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Nature, Abstract, etc." />

                    <label htmlFor="painting-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="levels">Price</label>
                    <input type="number" id="price" name="price" placeholder="$$$" />

                    <label htmlFor="summary">Author comment</label>
                    <textarea name="summary" id="authorComment" placeholder="Add any comment you like!"></textarea>

                    <input className="btn submit" type="submit" value="Add Painting" />

                </div>
            </form>
        </section>
    );
}
