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
            comment_avatar: profile.profile_avatar,
            username: user.username,
            created_at: new Date().toISOString(),
            tour_site_id: tour_site_id
        }

        console.log('comment data', data)
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = 'X-CSRFToken'
        // await axios.post('http://127.0.0.1:8000/api/comments/', data)
        await axios.post(
            'https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/comments/', data
        )
            
            // Adding the posted data in our state allowing it to apper on top by spreding ...backendComments
            .then(res => {
                setBackendComments([res.data, ...backendComments]);
                // console.log('posted comment', res.data)
            })
            .then(
                setActiveComment(null)
            )
            .catch(err => {
                alert("An error occured while posting your comment. Please try again later")
            })
    }

    // handling deletion of comments (Replies are also comments)
    const deleteComment = async (commentId) => {
        if (window.confirm('Your Comment will be deleted!')) {
            axios.defaults.xsrfCookieName = 'csrftoken'
            axios.defaults.xsrfHeaderName = 'X-CSRFToken'

            // await axios.delete(`http://127.0.0.1:8000/api/comments/${commentId}`)
            await axios.delete(
                `https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/comments/${commentId}`
            )
                
                // After the request is succesfull we set our state to comments without the deleted object
                .then(() => {
                    const updatedBackendComments = backendComments.filter
                        (backendComment => backendComment.id !== commentId);

                    setBackendComments(previousComments => updatedBackendComments)
                })
                .catch(err => {
                    alert("An error occured while deleting your comment. Please try agin later.")
                })
        }

    }

    // handling updating of comment when edited
    const updateComment = async (body, commentId) => {

        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = 'X-CSRFToken'

        // Using patch insted of put as we are only editing a section of the object
        // await axios.patch(`http://127.0.0.1:8000/api/comments/${commentId}/`, body)
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

    useEffect(() => {
        // axios.get('http://127.0.0.1:8000/api/comments/')
        axios.get(
            'https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/comments/'
        )
            .then(res => {
                setBackendComments(res.data)
            })
            .catch(err => {
                console.log("An error occured while feaching comments")
            })
        // axios.get(`http://127.0.0.1:8000/api/user/profile/${id}`)
        axios.get(
            `https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/user/profile/${id}`
        )
            .then(res => {
                setProfile(res.data);
            })
            .catch(err => { 
                console.log("An error occured while fetching a user profile")
            })

    }, [id]);

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
