import React, { useState } from 'react';

const CommentForm = ({
    handleSubmit,
    submitLable,
    hasCancelButton = false,
    initialText = "",
    handleCancel
}) => {
    const [body, setBody] = useState(initialText);
    const isTextareaDisabled = body.length === 0 //Returns True or False

    // Handle Submit
    const onSubmit = event => {
        event.preventDefault();
        handleSubmit(body);
        setBody("")
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <textarea className='commet-form-textarea'
                    vlaue={body}
                    defaultValue={initialText}
                    onChange={(e) => setBody(e.target.value)}
                />

                <div className='post-btn'>
                    <button className='btn btn-primary btn-sm'
                        disabled={isTextareaDisabled}>
                        {submitLable}
                    </button>
                    {hasCancelButton && (
                        <button type='button' className='btn btn-danger m-2 btn-sm'
                            onClick={handleCancel}
                        >Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default CommentForm;