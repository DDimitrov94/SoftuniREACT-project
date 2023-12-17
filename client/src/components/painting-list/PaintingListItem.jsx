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
                <div className="allPaintings-info-text">
                    <h6>Category: {category}</h6>
                    <h2>Price: {title + " "}{price + "$"}</h2>
                    <Link to={`/paintings/${_id}`} className="details-button">Details</Link>
                </div>
            </div>
        </div>

    );
}
