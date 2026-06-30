import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'

const reactionEmoji = {
    thumbsUp: '👍',
    heart: '❤️',
    laugh: '😂',
    cry: '😢',
    angry: '😡'
}

export const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch()

    const ReactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type='button'
                onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return <div>{ReactionButtons}</div>
}