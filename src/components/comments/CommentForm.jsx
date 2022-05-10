import React, { useState } from 'react';


const CommentForm = ({
    handleSubmit,
    submitLabel,
    hasCancelButton = false,
    initialText = "",
    handleCancel
}) => {

    // COMMENT FORM  STATES
    const [body, setBody] = useState(initialText);
    const isTextareaDisabled = body.length === 0;

    // Handle Submit
    const onSubmit = event => {
        event.preventDefault();
        handleSubmit(body);
        setBody("")
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <textarea className='comment-form-textarea'
                    value={body}
                    defaultValue={initialText}
                    onChange={(e) => setBody(e.target.value)}
                />

                <div className='post-btn'>
                    <button className='btn btn-primary btn-sm'
                        disabled={isTextareaDisabled}>
                        {submitLabel}
                    </button>
                    {
                        hasCancelButton && (
                            <button type='button' className='btn btn-danger m-2 btn-sm'
                                onClick={handleCancel}
                            >Cancel
                            </button>
                        )
                    }
                </div>
            </form>
        </div>
    );
};

export default CommentForm;