import React from 'react'

const AuthRoute = ({ children }) => {
    const isLogin = false;
    if(!isLogin) return <h2 style={{ textAlign: "Center", color: "red"}}>Access Denied</h2>
  return (
    <div>{children}</div>
  )
}

export default AuthRoute