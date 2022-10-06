import React from 'react'

interface IProps {
  type: 'password' | 'text'
  onClick: () => void
}

const PasswordButton = ({ type, onClick }: IProps) => {
  return (
    <div className="password__button">
      {type === 'password' && <button onClick={onClick}>Show</button>}
      {type === 'text' && <button onClick={onClick}>Hide</button>}
    </div>
  )
}

export default PasswordButton
