import { Avatar, Rate } from 'antd'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import cn from 'clsx'
import { UserDetailsRoute } from '../contants'

const Container = ({ user }: { user: any }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { pathname } = useLocation()

  return (
    <div className="users__details__container">
      <header className="users__container__header--nav">
        <button type="button" onClick={() => navigate('/dashboard/users')}>
          <span className="users__container__header--icon">&larr;</span>
          <span>Back to Users</span>
        </button>
      </header>

      <header className="users__container__header">
        <h3 className="users__container__header--title">User Details</h3>

        <div className="users__container__header--button">
          <button className="users__container__button-blacklist">
            Blacklist user
          </button>
          <button className="users__container__button-activate">
            Activate user
          </button>
        </div>
      </header>

      <div className="users__container__card">
        <div className="users__container__card--grid">
          <div className="users__container__card--profile">
            <Avatar src={user?.profile?.avatar} alt="" size={100} />
            <div>
              <h3 className="users__container__card--username">
                {user?.profile?.lastName} {user?.profile?.firstName}
              </h3>
              <h4 className="users__container__card--acc-number">
                {user?.accountNumber}
              </h4>
            </div>
          </div>
          <div className="users__container__card--rating">
            <h4 className="users__container__card--rating-title">
              User`s Tier
            </h4>
            <Rate
              count={3}
              value={Math.floor(Math.random() * 3) + 1}
              disabled={true}
              style={{
                transform: 'scale(.9)'
              }}
            />
          </div>

          <div className="users__container__card--bank">
            <h3 className="users__container__card--bank-balance">
              <span>&#8358;</span>
              {(user?.accountBalance as string)?.toLocaleLowerCase()}
            </h3>
            <h4 className="users__container__card--bank-name">
              9912345678/Providus Bank
            </h4>
          </div>
        </div>

        <ul className="users__container__card--route">
          {UserDetailsRoute.map((item) => {
            return (
              <li
                key={item.pathname}
                className={cn(
                  true && 'users__container__card--route-item',
                  pathname.includes(item.pathname) &&
                    'users__container__card--route-active'
                )}
              >
                <Link
                  to={`/dashboard/users/details/${id as string}/${
                    item.pathname
                  }`}
                >
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Container
