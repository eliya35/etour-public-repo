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

    // rootComments are comments with parent_id null i.e they have no relation with other comments
    const rootComments = backendComments.filter((backendComment) => backendComment.parent_id === null);

    // filter and place each comment to its relevant tour site i.e comments of grand canyon are
    // only on the grand canyon view page.
    const filterdRootComments = rootComments.filter(rootComment => rootComment.tour_site_id === tour_site_id)

    const getReplies = commentId => {
        return backendComments
            .filter(backendComment => backendComment.parent_id === commentId)
            .sort(
                (a, b) =>
                    new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
            );
    }

    const addComment = async (body, parent_id = null) => {
        // console.log('addComment', body, parent_id,)

        let data = {
            body: body,
            parent_id: parent_id,
            user_id: user.id,
            comment_profile: profile.avatar,
            username: user.username,
            created_at: new Date().toISOString(),
            tour_site_id: tour_site_id
        }

        console.log('data', data)
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = 'X-CSRFToken'
        await axios.post('http://127.0.0.1:8000/api/comments/', data)
            // Adding the posted data in our state allowing it to apper on top by spreding ...backendComments
            .then(res => {
                setBackendComments([res.data, ...backendComments]);
                // console.log('posted comment', res.data)
            })
            .then(
                setActiveComment(null)
            )
            .catch(err => {
                console.log(err)
            })
    }

    // handling deletion of comments (Replies are also comments)
    const deleteComment = async (commentId) => {
        if (window.confirm('Your Comment will be deleted!')) {
            axios.defaults.xsrfCookieName = 'csrftoken'
            axios.defaults.xsrfHeaderName = 'X-CSRFToken'

            await axios.delete(`http://127.0.0.1:8000/api/comments/${commentId}`)
                // After the request is succesfull we set our state to comments without the deleted object
                .then(() => {
                    const updatedBackendComments = backendComments.filter
                        (backendComment => backendComment.id !== commentId);

                    setBackendComments(previousComments => updatedBackendComments)
                })
                .catch(err => {
                    console.log(err)
                })
        }

    }

    // handling updating of comment when edited
    const updateComment = async (body, commentId) => {

        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = 'X-CSRFToken'

        // Using patch insted of put as we are only editing a section of the object
        await axios.patch(`http://127.0.0.1:8000/api/comments/${commentId}/`, body)
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

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/comments/')
            .then(res => {
                setBackendComments(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get(`http://127.0.0.1:8000/api/user/profile/${id}`)
            .then(res => {
                setProfile(res.data);
            })
            .catch(err => console.log(err))

    }, []);

    // Comment Ui
    return (
        <div className='comments'>
            <h3 className="comments-title">Comments</h3>
            <div className="comment-form-title">Write Comment</div>

            {/* display a comment form */}
            <CommentForm
                submitLable="Post"
                handleSubmit={addComment}
            />

            {/* Comment component with the required props */}
            <div className="comments-container">
                {filterdRootComments.map(filterdComment => (
                    <Comment
                        key={filterdComment.id}
                        comment={filterdComment}
                        replies={getReplies(filterdComment.id)}
                        currentUserId={user.id}
                        deleteComment={deleteComment}
                        updateComment={updateComment}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment} // Allow us to change our state from outside
                        addComment={addComment}
                    />
                ))}
            </div>
        </div>
    );
};

export default Comments;
