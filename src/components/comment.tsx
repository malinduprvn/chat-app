import React, { useState } from 'react';
import Moment from 'react-moment';
import 'moment/locale/en-gb';
import { FaEdit, FaReply, FaTrash } from 'react-icons/fa';

interface Comment {
    id: string;
    text: string;
    timestamp: Date;
    image: string;
    userName: string;
    isSample: boolean;
}

interface CommentProps {
    comment: Comment;
    onDelete: () => void;
    onEdit: (updatedText: string) => void;
}

const CommentComponent: React.FC<CommentProps> = ({ comment, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editedText, setEditedText] = useState<string>(comment.text);
    const [count, setCount] = useState<number>(0);

    const handleSaveEdit = () => {
        onEdit(editedText);
        setIsEditing(false);
    };

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }


    return (
        <div className={`${!comment.isSample && "ml-10"} border flex justify-between p-4 mb-4 bg-white`}>
            <div className="flex items-center mb-2 ">
                <div className='bg-indigo-200 m-2 p-2 px-4  rounded flex items-center flex-col'>
                    <button onClick={handleIncrement}>+</button>
                    <div>{count}</div>
                    <button onClick={handleDecrement}>-</button>
                </div>
                <div className='ml-8'>

                    <div className='flex items-center'>
                        <img src={comment.image} alt="User" className="w-10 h-10 rounded-full mr-4" />
                        <div className="font-bold ml-4">{comment.userName}</div>
                        {!comment.isSample &&  <div className="text-white bg-blue-800 rounded px-3 ml-4">You</div>}
                        <Moment fromNow className="text-gray-500 text-sm ml-4">{comment.timestamp}</Moment>
                    </div>
                    <div className="font-normal text-gray-400 mt-2">{comment.text}</div>
                </div>

            </div>
            {comment.isSample && <button className="flex items-center text-blue-800">
                <FaReply className="mr-1" /> Reply
            </button>}
            {!comment.isSample && (
                <div>
                    {isEditing ? (
                        <div>
                            <textarea
                                value={editedText}
                                onChange={(e) => setEditedText(e.target.value)}
                                className="border p-2 w-full"
                            />
                            <button onClick={handleSaveEdit} className="bg-green-500 text-white px-4 py-2 mt-2">Save</button>
                        </div>
                    ) : (
                        <div className="mt-2 flex">
                                <button onClick={onDelete} className="flex items-center text-red-500">
                                    <FaTrash className="mr-1" /> Delete
                                </button>
                                <button onClick={() => setIsEditing(true)} className="flex items-center text-blue-800 mr-4 ml-4">
                                    <FaEdit className="mr-1" /> Edit
                                </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CommentComponent;