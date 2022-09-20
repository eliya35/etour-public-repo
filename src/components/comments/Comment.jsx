import React from 'react';
import CommentForm from './CommentForm';
import '../Styles/comments.css';

const Comment = ({
    comment,
    replies,
    currentUserId,
    deleteComment,
    updateComment,
    activeComment,
    setActiveComment,
    addComment,
    parentId = null,
}) => {
    
    const fiveMinutes = 300000;
    const commentTime = comment.created_at;
    const timePassed = new Date() - new Date(commentTime) > fiveMinutes;
    const canReply = Boolean(currentUserId);
    const canEdit = currentUserId === comment.user_id && !timePassed;
    const canDelete = currentUserId === comment.user_id && !timePassed;
    const createdAt = new Date(commentTime).toLocaleDateString();
    const isReplying =
        activeComment &&
        activeComment.type === "replying" &&
        activeComment.id === comment.id;

    const isEditing =
        activeComment &&
        activeComment.type === "editing" &&
        activeComment.id === comment.id;

    const replyId = parentId ? parentId : comment.id;

    return (
        <div className='comment'>
            <div className="comment-image-container">
                {
                    comment.comment_avatar_url !== null || undefined ?
                        <img src={comment.comment_avatar_url} className='user-profile-img' alt="avatar" /> :
                        <img src="https://etour-first-backet.s3.amazonaws.com/avatars/user-icon.png" alt="avatar" />
                }
                <div className="comment-right-part"></div>
                <div className="comment-content">
                    <div className="comment-author">{comment.username}</div>
                    <div>{createdAt}</div>
                </div>

                {!isEditing && <div className="comment-text">{comment.body}</div>}

                {
                    isEditing && (
                        <CommentForm
                            submitLabel="Update"
                            hasCancelButton
                            initialText={comment.body}
                            handleSubmit={(body) => updateComment(body, comment.id)}
                            handleCancel={() => setActiveComment(null)}
                        />
                    )
                }

                <div className='comment-actions'>

                    {/* REPLAY ACTION*/}

                    {
                        canReply && <div className='comment-action'
                            onClick={() =>
                                setActiveComment({ id: comment.id, type: "replying" })}
                        >Reply
                        </div>
                    }

                    {/* EDIT ACTION */}

                    {
                        canEdit && <div className='comment-action'
                            onClick={() => setActiveComment({ id: comment.id, type: "editing" })}
                        >Edit
                        </div>
                    }

                    {/* DELETE ACTION*/}

                    {
                        canDelete && <div className='comment-action'
                            onClick={() => deleteComment(comment.id)}
                        >Delete
                        </div>
                    }

                </div>

                {
                    isReplying && (
                        <CommentForm
                            submitLabel="Replay"
                            hasCancelButton
                            handleCancel={() => setActiveComment(null)}
                            handleSubmit={(body) => addComment(body, replyId)}
                        />
                    )
                }

                {/* HANDLE REPLES COMMENTS */}
                {
                    replies.length > 0 && (
                        <div className='replies'>
                            {
                                replies.map(reply => (
                                    <Comment
                                        comment={reply}
                                        key={reply.id}
                                        replies={[]} // means replies can never be nested
                                        currentUserId={currentUserId}
                                        addComment={addComment}
                                        deleteComment={deleteComment}
                                        updateComment={updateComment}
                                        activeComment={activeComment}
                                        setActiveComment={setActiveComment}
                                        parentId={comment.id}
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Comment;