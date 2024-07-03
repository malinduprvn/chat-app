import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { deleteComment, editComment } from '../store/commentsSlice';
import CommentComponent from "./comment";

const CommentsList: React.FC = () => {
    const comments = useSelector((state: RootState) => state.comments.comments);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            {comments.map(comment => (
                <CommentComponent
                    key={comment.id}
                    comment={comment}
                    
                    onDelete={() => dispatch(deleteComment(comment.id))}
                    onEdit={(updatedText: string) => dispatch(editComment({ id: comment.id, text: updatedText }))}
                />
            ))}
        </div>
    );
};

export default CommentsList;