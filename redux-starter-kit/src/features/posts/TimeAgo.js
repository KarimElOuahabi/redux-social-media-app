import React from 'react'
import { formatDistanceToNow, parseISO } from 'date-fns'

export const TimeAgo = ({ timestamp }) => {
  let timeAgo = ''
  if (timestamp) {
    const parsedTimestamp = parseISO(timestamp)
    timeAgo = formatDistanceToNow(parsedTimestamp, { addSuffix: true })
  }
  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}   