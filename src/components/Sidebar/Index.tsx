import { useSidebarContext } from 'context/sidebar'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import cn from 'clsx'
import SwitchOrganization from './SwitchOrganization'
import {
  BusinessesMenuNavigation,
  CustomersMenuNavigation,
  SettingsMenuNavigation
} from './contants'
import { Briefcase, Home, Logo, SignOut } from 'components/contants/assets'
import { Divider } from 'antd'

const activeNavigation = (pathname: string, route: string) =>
  pathname.includes(route)

const Sidebar = () => {
  const navigate = useNavigate()
  const { showSidebar, setShowSidebar } = useSidebarContext()
  const { pathname } = useLocation()

  return (
    <>
      <div
        className="sidebar__overlay"
        data-show={showSidebar}
        onClick={() => setShowSidebar(false)}
      />
      <div className="sidebar sidebar__fixed" data-show={showSidebar}>
        <div className="sidebar__head">
          <div className="sidebar__toggle__close">
            <button
              className="sidebar__toggle__close__button"
              onClick={() => setShowSidebar(false)}
            >
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
          </div>

          <div className="sidebar__brand">
            <Link to="/dashboard">
              <img src={Logo} alt="Lendsqr Logo" />
            </Link>
          </div>
        </div>

        <div className="sidebar__element">
          <ul className="sidebar__navigation__ul">
            <li
              className={`sidebar__navigation__list`}
              style={{
                opacity: 1
              }}
            >
              <SwitchOrganization>
                <div className="sidebar__navigation__link">
                  <img src={Briefcase} alt="Icon" />
                  <span>Switch Organization</span>
                  <i
                    className="fa fa-angle-down"
                    aria-hidden="true"
                    style={{
                      display: 'inline-block',
                      marginLeft: '10px'
                    }}
                  ></i>
                </div>
              </SwitchOrganization>
            </li>
          </ul>
          <div
            style={{
              height: '20px'
            }}
          />
          <ul className="sidebar__navigation__ul">
            <li
              className={cn(
                pathname === '/dashboard' &&
                  'sidebar__navigation__list__active sidebar__navigation__list--selected',
                'sidebar__navigation__list'
              )}
              onClick={() => {
                if (showSidebar) {
                  setShowSidebar(false)
                }
              }}
            >
              <Link to="/dashboard">
                <span className="sidebar__navigation__link">
                  <img src={Home} alt="Icon" />
                  <span className="inline-block ml-4">Dashboard</span>
                </span>
              </Link>
            </li>
          </ul>

          {/* Customer Menu */}
          <h6 className="sidebar__navigation__title">Customers</h6>
          <ul className="sidebar__navigation__ul">
            {CustomersMenuNavigation.map(({ route, title, icon }) => (
              <li
                className={cn(
                  activeNavigation(pathname, route) &&
                    'sidebar__navigation__list__active sidebar__navigation__list--selected',
                  'sidebar__navigation__list'
                )}
                key={title}
                onClick={() => {
                  if (showSidebar) {
                    setShowSidebar(false)
                  }
                }}
              >
                <Link to={route}>
                  <span className="sidebar__navigation__link">
                    <img src={icon} alt="Icon" />
                    <span className="inline-block ml-4">{title}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Businesses Menu */}
          <h6 className="sidebar__navigation__title">Businesses</h6>
          <ul className="sidebar__navigation__ul">
            {BusinessesMenuNavigation.map(({ route, title, icon }) => (
              <li
                className={cn(
                  activeNavigation(pathname, route) &&
                    'sidebar__navigation__list__active sidebar__navigation__list--selected',
                  'sidebar__navigation__list'
                )}
                key={title}
                onClick={() => {
                  if (showSidebar) {
                    setShowSidebar(false)
                  }
                }}
              >
                <Link to={route}>
                  <span className="sidebar__navigation__link">
                    <img src={icon} alt="Icon" />
                    <span className="inline-block ml-4">{title}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Settings Menu */}
          <h6 className="sidebar__navigation__title">Settings</h6>
          <ul className="sidebar__navigation__ul">
            {SettingsMenuNavigation.map(({ route, title, icon }) => (
              <li
                className={cn(
                  activeNavigation(pathname, route) &&
                    'sidebar__navigation__list__active sidebar__navigation__list--selected',
                  'sidebar__navigation__list'
                )}
                key={title}
                onClick={() => {
                  if (showSidebar) {
                    setShowSidebar(false)
                  }
                }}
              >
                <Link to={route}>
                  <span className="sidebar__navigation__link">
                    <img src={icon} alt="Icon" />
                    <span className="inline-block ml-4">{title}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <Divider
            style={{
              margin: '20px 0',
              marginBottom: '5px'
            }}
          />

          {/* Log out */}
          <ul className="sidebar__navigation__ul">
            <li
              className="sidebar__navigation__list"
              style={{
                opacity: 1
              }}
              onClick={() => navigate('/login')}
            >
              <span
                className="sidebar__navigation__link"
                style={{
                  color: '#213F7D'
                }}
              >
                <img src={SignOut} alt="Icon" />
                <span className="inline-block">Logout</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
