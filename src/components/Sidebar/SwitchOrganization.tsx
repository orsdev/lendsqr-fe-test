import { Dropdown, Menu } from 'antd'
import { FC, ReactNode } from 'react'

const menu = (
  <Menu
    selectable
    defaultSelectedKeys={['3']}
    items={[
      {
        key: '100',
        label: 'Organization 1'
      },
      {
        key: '200',
        label: 'Organization 2'
      },
      {
        key: '300',
        label: 'Organization 3'
      }
    ]}
  />
)

const SwitchOrganization: FC<{
  children: ReactNode
}> = ({ children }) => {
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      {children}
    </Dropdown>
  )
}

export default SwitchOrganization
