import { Dropdown, Menu, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { ArrowDown, Next, Prev } from 'components/contants/assets'
import dayjs from 'dayjs'
import { useGetRequest } from 'hooks'
import { useState } from 'react'

const columns: ColumnsType<any[]> = [
  {
    title: <span className="users__table--th">Organization</span>,
    dataIndex: 'orgName',
    render: (value: string) => {
      return (
        <span
          className="users__table--td"
          onClick={() => console.log('clicked')}
        >
          {value}
        </span>
      )
    }
  },
  {
    title: <span className="users__table--th">Username</span>,
    dataIndex: 'userName',
    render: (value: string) => {
      return (
        <button
          type="button"
          className="users__table--td users__table--td-button"
          onClick={() => console.log('clicked')}
        >
          {value}
        </button>
      )
    }
  },
  {
    title: <span className="users__table--th">Email</span>,
    dataIndex: 'email',
    render: (value: string) => {
      return (
        <span
          className="users__table--td"
          onClick={() => console.log('clicked')}
        >
          {value}
        </span>
      )
    }
  },
  {
    title: <span className="users__table--th">Phone</span>,
    dataIndex: 'phoneNumber',
    render: (value: string) => {
      return (
        <span
          className="users__table--td"
          onClick={() => console.log('clicked')}
        >
          {value}
        </span>
      )
    }
  },
  {
    title: <span className="users__table--th"> Date Joined </span>,
    dataIndex: 'createdAt',
    render: (value: string) => {
      return (
        <span
          className="users__table--td"
          onClick={() => console.log('clicked')}
        >
          {dayjs(value).format('MMM DD, YYYY HH:MM A')}
        </span>
      )
    }
  }
]

const UsersTable = () => {
  const [pageSize, setPageSize] = useState(9)
  const { data, isLoading }: any = useGetRequest({
    url: '/users',
    key: ['get-users']
  })

  const users = data ?? []

  return (
    <div className="users__table__wrapper">
      <Table
        className="users__table"
        columns={columns}
        rowKey="id"
        dataSource={users}
        loading={isLoading}
        scroll={{ x: 900 }}
        footer={() => {
          if (users?.length === 0) return

          return (
            <div className="users__table__footer">
              <div className="users__table__footer--total">
                <span>Showing</span>
                <Dropdown
                  trigger={['click']}
                  overlay={
                    <Menu
                      selectable
                      defaultSelectedKeys={['1']}
                      selectedKeys={[pageSize.toString()]}
                      onSelect={(info) => {
                        const { key } = info
                        if (key.length > 0) {
                          const toNumber = +key

                          setPageSize(toNumber)
                        }
                      }}
                      items={[
                        {
                          key: '9',
                          label: '9'
                        },
                        {
                          key: '20',
                          label: '20'
                        },
                        {
                          key: '50',
                          label: '50'
                        },
                        {
                          key: '100',
                          label: '100'
                        }
                      ]}
                    />
                  }
                  className="users__table__footer--dropdown"
                >
                  <div className="users__table__footer--dropdown-inner">
                    <span>{pageSize}</span>
                    <span>
                      <img src={ArrowDown} alt="Expand" />
                    </span>
                  </div>
                </Dropdown>
                <span>out of {users?.length}</span>
              </div>
            </div>
          )
        }}
        pagination={
          users?.length > 0 && {
            total: users?.length,
            pageSize,
            showSizeChanger: false,
            position: ['bottomRight'],
            className: 'users__table__pagination',
            itemRender: (_: any, type: string, originalElement: any) => {
              if (type === 'prev') {
                return (
                  <button className="ant-pagination-item-link">
                    <img src={Prev} alt="Previous" />
                  </button>
                )
              }
              if (type === 'next') {
                return (
                  <button className="ant-pagination-item-link">
                    <img src={Next} alt="Next" />
                  </button>
                )
              }
              return originalElement
            }
          }
        }
      />
    </div>
  )
}

export default UsersTable
