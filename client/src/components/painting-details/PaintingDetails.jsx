import { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as paintingService from '../../services/paintingService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
import reducer from './commentReducer';
import useForm from '../../hooks/useForm';
import { pathToUrl } from "../../utils/pathUtils";

export default function PaintingDetails() {
    const navigate = useNavigate();
    const { email, userId } = useContext(AuthContext);
    const [painting, setPainting] = useState({});
    const [comments, dispatch] = useReducer(reducer, []);
    const { paintingId } = useParams();

    useEffect(() => {
        paintingService.getOne(paintingId)
            .then(setPainting);

        commentService.getAll(paintingId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                });
            });
    }, [paintingId]);

    const addCommentHandler = async (values) => {
        const newComment = await commentService.create(
            paintingId,
            values.comment
        );

        newComment.owner = { email };

        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        })
    }

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${painting.title}`);

        if (hasConfirmed) {
            await paintingService.remove(paintingId);

            navigate('/paintings');
        }
    }

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: '',
    });

    return (
        <section id="painting-details">
            <h1>painting Details</h1>
            <div className="info-section">
                <div className="painting-header">
                    <img className="painting-img" src={painting.imageUrl} alt={painting.title} />
                    <h1>{painting.title}</h1>
                    <p className="type">{painting.category}</p>
                </div>

                <p className="text">{painting.summary}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({ _id, text, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>

                {userId === painting._ownerId && (
                    <div className="buttons">
                        <Link to={pathToUrl("/paintings/:paintingId/edit", { paintingId })} className="button">Edit</Link>
                        <button className="button" onClick={deleteButtonClickHandler}>Delete</button>
                    </div>
                )}
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onSubmit}>
                    <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </section>
    );
}
