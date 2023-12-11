import { useEffect, useState } from 'react';

import * as paintingService from '../../services/paintingService';
import PaintingListItem from './PaintingListItem';

export default function PaintingList() {

    const [paintings, setPaintings] = useState([]);

    useEffect(() => {
        paintingService.getAll()
            .then(result => setPaintings(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Paintings</h1>

            {paintings.map(Painting => (
                <PaintingListItem key={Painting._id} {...Painting} />
            ))}

            {paintings.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    );
}