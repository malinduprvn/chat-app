import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { addComment } from '../store/commentsSlice';

const AddComment: React.FC = () => {
    const [newComment, setNewComment] = useState<string>('');
    const [newImage, setNewImage] = useState<string>('');
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        setNewImage(`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`);
    }, []);

    const handleAddComment = () => {
        if (newComment.trim()) {
            dispatch(addComment({ text: newComment, image: newImage ,userName:'Praveen'}));
            setNewComment('');
            setNewImage(`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`);
        }
    };

    return (
        <div className="mb-4 relative">
            <div className="flex items-start mb-2 bg-white rounded p-4">
                <img src={newImage} alt="User" className="w-10 h-10 rounded-full mr-4" />
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="border p-4 flex-grow mr-4"
                />
                <button onClick={handleAddComment} className="bg-blue-800 text-white px-4 py-2 rounded">SEND</button>
            </div>
        </div>


    );
};

export default AddComment;