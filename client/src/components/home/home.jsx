import { useEffect, useState } from "react";
import withAuth from "../../HOC/withAuth";
import * as paintingService from '../../services/paintingService';
import LatestPainting from "./latest-paintings/LatestPainting";

function Home({
    _id,
    accessToken,
    email,
}) {
    const [latestPaintings, setlatestPaintings] = useState([]);

    useEffect(() => {
        paintingService.getLatest()
            .then(result => setlatestPaintings(result));
    }, [])

    // throw new Error('something is wrong');

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h3>Show the world your art skills</h3>
            </div>
            <img src="https://png.pngtree.com/png-clipart/20220220/original/pngtree-woman-painting-on-canvas-flat-illustration-png-image_7270983.png" alt="hero" />

            <div id="home-page">
                <h1>Popular Paintings</h1>

                {latestPaintings.map(painting => <LatestPainting {...painting} key={painting._id}/>)}

                {!latestPaintings.length && <p className="no-articles">No paintings</p>}

                {/* <p>{email}</p> */}
            </div>
        </section>
    );
}

const EnhancedHome = withAuth(Home);

export default EnhancedHome;
