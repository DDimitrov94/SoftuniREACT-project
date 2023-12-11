import { Link } from "react-router-dom";

export default function paintingListItem({
    _id,
    title,
    category,
    imageUrl,
    price,
}) {
    return (
        <div className="allPaintings">
            <div className="allPaintings-info">
                <img src={imageUrl} />
                <h6>{category}</h6>
                <h2>{title + " "}{price + "$"}</h2>

                <Link to={`/paintings/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
}
