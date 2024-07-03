import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface Comment {
  id: string;
  text: string;
  userName: string;
  timestamp: Date;
  image: string;
  isSample: boolean; 
}

interface CommentsState {
  comments: Comment[];
}

const initialState: CommentsState = {
  comments: [
    {
      id: uuidv4(),
      text: 'This is a sample comment 1.',
      userName: 'User1',
      timestamp: new Date(),
      image: `https://i.pravatar.cc/150?img=1`,
      isSample: true, 
    },
    {
      id: uuidv4(),
      text: 'This is a sample comment 2.',
      userName: 'User2',
      timestamp: new Date(),
      image: `https://i.pravatar.cc/150?img=2`,
      isSample: true, 
    },
  ],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<{ text: string; image: string, userName:string }>) => {
      const { text, image ,userName} = action.payload;
      const newComment: Comment = {
        id: uuidv4(),
        text,
        userName,
        timestamp: new Date(),
        image,
        isSample: false, 
      };
      state.comments.push(newComment);
    },
    deleteComment: (state, action: PayloadAction<string>) => {
      state.comments = state.comments.filter(comment => comment.id !== action.payload);
    },
    editComment: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const { id, text } = action.payload;
      const comment = state.comments.find(comment => comment.id === id);
      if (comment) {
        comment.text = text;
      }
    },
  },
});

export const { addComment, deleteComment, editComment } = commentsSlice.actions;
export default commentsSlice.reducer;