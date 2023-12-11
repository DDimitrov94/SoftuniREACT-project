import { Link } from "react-router-dom";
import { pathToUrl } from "../../../utils/pathUtils";

export default function LatestPainting({
    _id,
    imageUrl,
    title,
}) {
    return (
        <div className="painting">
            <div className="image-wrap">
                <img src={imageUrl} />
            </div>
            <h3>{title}</h3>
            <div className="data-buttons">
                <Link to={pathToUrl("/paintings/:paintingId", { paintingId: _id })} className="btn details-btn">Details</Link>
            </div>
        </div>
    );
}
