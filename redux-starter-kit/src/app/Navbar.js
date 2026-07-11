import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNotifications, selectAllNotifications } from '../features/notifications/notificationsSlice'

export const Navbar = () => {
  const dispatch = useDispatch()

  const onRefreshNotificationsClicked = () => {
    dispatch(fetchNotifications())
  }

  const notifications = useSelector(selectAllNotifications)
  const numUnreadNotifications = notifications.filter((n) => !n.read).length
  let unreadNotificationsBadge
  if (numUnreadNotifications > 0) {
    unreadNotificationsBadge = (
      <span className="badge">{numUnreadNotifications}</span>
    )
  }

  return (
    <nav>
      <section>
        <h1>Social Media App</h1>

        <div className="navContent">
          <div className="navLinks"></div>
          <Link to="/">Posts</Link>
          <Link to="/users">Users</Link>
          <Link to="/notifications">Notifications  {unreadNotificationsBadge}</Link>
          <button className="button" onClick={onRefreshNotificationsClicked}>
            Refresh Notifications 
          </button>
        </div>
      </section>
    </nav>
  )
}
