import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../usercontext/UserProvider';
import axios from 'axios';
import CommentForm from './CommentForm';
import Comment from './Comment'
import '../Styles/comments.css'


const Comments = ({ tour_site_id }) => {
    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const { user } = useContext(UserContext);
    const [profile, setProfile] = useState({});
    const id = user.id

    // rootComments are comments with parent_id null.
    const rootComments =
        backendComments.filter((backendComment) => backendComment.parent_id === null);

    // filter root comments and place each comment to its tour destination
    const filteredRootComments =
        rootComments.filter(rootComment => rootComment.tour_site_id === tour_site_id)

    const getReplies = commentId => {
        return backendComments
            .filter(backendComment => backendComment.parent_id === commentId)
            .sort(
                (a, b) =>
                    new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
            );
    }

    const addComment = async (body, parent_id = null) => {
        let data = {
            body: body,
            parent_id: parent_id,
            user_id: user.id,
            // comment_avatar_url: profile.profile_avatar,
            comment_avatar_url: null,
            username: user.username,
            created_at: new Date().toISOString(),
            tour_site_id: tour_site_id
        }

        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = 'X-CSRFToken'
        await axios.post(
            'https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/comments/', data
        )

            // Put the new comment on top of other comments
            .then(res => {
                setBackendComments([res.data, ...backendComments]);
            })
            .then(
                setActiveComment(null)
            )
            .catch(err => {
                alert("An error occurred while posting your comment. Please try again later")
            })
    }

    // Deletes Replies also
    const deleteComment = async (commentId) => {
        if (window.confirm('Your Comment will be deleted!')) {
            axios.defaults.xsrfCookieName = 'csrftoken'
            axios.defaults.xsrfHeaderName = 'X-CSRFToken'

            await axios.delete(
                `https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/comments/${commentId}`
            )

                // Set our state to comments without the deleted comment
                .then(() => {
                    const updatedBackendComments = backendComments.filter
                        (backendComment => backendComment.id !== commentId);

                    setBackendComments(previousComments => updatedBackendComments)
                })
                .catch(err => {
                    alert("An error occurred while deleting your comment. Please try aging later.")
                })
        }
    }

    // Handling updating of comment when edited
    const updateComment = async (body, commentId) => {
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = 'X-CSRFToken'

        // Using patch as we are only editing a section of the object
        await axios.patch(
            `https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/comments/${commentId}/`, body
        )
            .then(() => {
                const updatedBackendComments = backendComments.map(backendComment => {
                    if (backendComment.id === commentId) {
                        return { ...backendComment, body: body };
                    }
                    return backendComment
                })
                // Update the state with the edited comments
                setBackendComments(updatedBackendComments);
                setActiveComment(null)
            })
    }

    useEffect(
        () => {
            axios.get(
                'https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/comments/'
            )
                .then(res => {
                    setBackendComments(res.data)
                })
                .catch(err => {
                    console.log("An error occurred while fetching comments")
                })
            axios.get(
                `https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/user/profile/${id}`
            )
                .then(res => {
                    setProfile(res.data);
                })
                .catch(err => {
                    console.log("An error occurred while fetching a user profile")
                })
        }, [id]
    );

    // COMMENT USER INTERFACE
    return (
        <div className='comments'>
            <h3 className="comments-title">Comments</h3>
            <div className="comment-form-title">Leave a Comment</div>

            {/* display a comment form */}
            <CommentForm
                submitLabel="Post"
                handleSubmit={addComment}
            />
            <div className="comments-container">
                {filteredRootComments.map(filteredComment => (
                    <Comment
                        key={filteredComment.id}
                        comment={filteredComment}
                        replies={getReplies(filteredComment.id)}
                        currentUserId={user.id}
                        deleteComment={deleteComment}
                        updateComment={updateComment}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                        addComment={addComment}
                    />
                ))}
            </div>
        </div>
    );
};

export default Comments;
