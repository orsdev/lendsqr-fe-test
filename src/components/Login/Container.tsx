import { Logo } from 'components/contants/assets'
import { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const Container: FC<IProps> = ({ children }) => (
  <div className="login__container">
    <div className="login__container__content">
      <div className="login__container__image">
        <img src={Logo} alt="Lendsqr Logo" />
      </div>
      <div className="login__container__body">
        <div className="login__container__bg" />
        <div className="login__container__overlay" />
        <div className="login__container__main">{children}</div>
      </div>
    </div>
  </div>
)

export default Container
