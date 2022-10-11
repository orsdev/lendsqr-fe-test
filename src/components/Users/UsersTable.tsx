import { Button, Dropdown, Menu, Table, Tooltip } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import {
  ArrowDown,
  Eye,
  Filter,
  Next,
  Prev,
  UserCancel,
  UserVerify
} from 'components/contants/assets'
import dayjs from 'dayjs'
import { useGetRequest } from 'hooks'
import { omitBy } from 'lodash'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserStatus } from 'utills/getUsersStatus'
import FilterDropdown from './FilterDropdown'

const UsersTable = () => {
  const navigate = useNavigate()
  const [pageSize, setPageSize] = useState(9)
  const [filteredUsers, setFilteredUsers] = useState<null | any[]>(null)
  const { data, isLoading }: any = useGetRequest({
    url: '/users',
    key: ['get-users']
  })

  const users = data ?? []

  const onFilters = () => ({
    filterIcon: () => (
      <Tooltip title="Filter">
        <img
          src={Filter}
          alt="Filter"
          style={{
            width: '14px',
            height: '14px'
          }}
        />
      </Tooltip>
    ),
    filterDropdown: (
      <FilterDropdown
        organizations={users}
        onSubmit={(values) => {
          const checkForEmptyValues = omitBy(
            values,
            (item) => item === '' || item === undefined
          )

          /**
              This is checking if the user has not entered any values in the filter dropdown.
              If the user has
              not entered any values, then we do not want to filter the data.
            **/
          if (Object.keys(checkForEmptyValues).length === 0) return

          const filteredResult = users.filter(
            (item: any) =>
              item.orgName?.toLowerCase() ===
                values.orgName.toLowerCase().trim() ||
              item.userName?.toLowerCase() ===
                values.userName.toLowerCase().trim() ||
              item.email?.toLowerCase() === values.email.toLowerCase().trim() ||
              item.phoneNumber?.toLowerCase() ===
                values.phoneNumber.toLowerCase().trim() ||
              getUserStatus(
                item?.education?.monthlyIncome,
                item?.education?.loanRepayment
              ) === values.status?.toLowerCase() ||
              dayjs(item.createdAt).format('YYYY:DD:MM') ===
                dayjs(values.createdAt).format('YYYY:DD:MM')
          )

          setFilteredUsers(filteredResult)
        }}
        onReset={() => {
          setFilteredUsers(null)
        }}
      />
    )
  })

  const columns: ColumnsType<any[]> = [
    {
      title: <span className="users__table--th">Organization</span>,
      dataIndex: 'orgName',
      ...onFilters(),
      width: 60,
      render: (value: string) => {
        return (
          <span className="users__table--td users__table--td-transform">
            {value}
          </span>
        )
      }
    },
    {
      title: <span className="users__table--th">Username</span>,
      dataIndex: 'userName',
      ...onFilters(),
      width: 50,
      render: (value: string, record: any) => {
        return (
          <button
            type="button"
            className="users__table--td users__table--td-button users__table--td-navigate"
            onClick={() => {
              navigate(
                `/dashboard/users/details/${encodeURIComponent(
                  record.id
                )}/general`
              )
            }}
          >
            {value}
          </button>
        )
      }
    },
    {
      title: <span className="users__table--th">Email</span>,
      dataIndex: 'email',
      ...onFilters(),
      width: 70,
      render: (value: string) => {
        return <span className="users__table--td">{value}</span>
      }
    },
    {
      title: <span className="users__table--th">Phone</span>,
      dataIndex: 'phoneNumber',
      ...onFilters(),
      width: 70,
      render: (value: string) => {
        return <span className="users__table--td">{value}</span>
      }
    },
    {
      title: <span className="users__table--th"> Date Joined </span>,
      dataIndex: 'createdAt',
      ...onFilters(),
      width: 65,
      render: (value: string) => {
        return (
          <span className="users__table--td">
            {dayjs(value).format('MMM DD, YYYY HH:MM A')}
          </span>
        )
      }
    },
    {
      title: <span className="users__table--th"> Status </span>,
      ...onFilters(),
      width: 45,
      render: (_, record: any) => {
        const income: any[] =
          (record?.education?.monthlyIncome as string[]) ?? []
        const loan: string = record?.education?.loanRepayment

        const status = getUserStatus(income, loan)

        let className = ''

        if (status === 'active') {
          className = 'users__table--td-active'
        } else if (status === 'blacklisted') {
          className = 'users__table--td-blacklisted'
        } else if (status === 'pending') {
          className = 'users__table--td-pending'
        } else if (status === 'inactive') {
          className = 'users__table--td-inactive'
        }

        return (
          <span className="users__table--td users__table--td-transform">
            <span className={`${className} users__table--td-tag`}>
              {status}
            </span>
          </span>
        )
      }
    }
  ]

  return (
    <div className="users__table__wrapper">
      {filteredUsers !== null && (
        <header className="users__table__header">
          <Button type="primary" onClick={() => setFilteredUsers(null)}>
            Clear Filters
          </Button>
        </header>
      )}
      <Table
        className="users__table"
        columns={[
          ...columns,
          {
            title: '',
            key: 'operation',
            width: 20,
            fixed: 'right',
            render: (_, record: any) => {
              return (
                <Dropdown
                  trigger={['click']}
                  className="users__table__action"
                  overlay={
                    <>
                      <div
                        className="users__table__action-dropdown"
                        key="dropdown"
                      >
                        <button
                          className="users__table__action__item"
                          onClick={() => {
                            navigate(
                              `/dashboard/users/details/${encodeURIComponent(
                                record.id
                              )}/general`
                            )
                          }}
                        >
                          <img src={Eye} alt="View Details" />
                          <span
                            style={{
                              paddingLeft: '6px'
                            }}
                          >
                            View Details
                          </span>
                        </button>
                        <button className="users__table__action__item">
                          <img src={UserCancel} alt="Blacklist User" />
                          <span
                            style={{
                              paddingLeft: '6px'
                            }}
                          >
                            Blacklist User
                          </span>
                        </button>
                        <button className="users__table__action__item">
                          <img src={UserVerify} alt="Activate User" />
                          <span
                            style={{
                              paddingLeft: '6px'
                            }}
                          >
                            Activate User
                          </span>
                        </button>
                      </div>
                    </>
                  }
                  placement="bottomRight"
                >
                  <div>
                    <button>
                      <i className="fa fa-ellipsis-v" aria-hidden="true" />
                    </button>
                  </div>
                </Dropdown>
              )
            }
          }
        ]}
        tableLayout="fixed"
        rowKey="id"
        dataSource={filteredUsers !== null ? filteredUsers : users}
        loading={isLoading}
        scroll={{ x: 960 }}
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
            total:
              filteredUsers != null ? filteredUsers?.length : users?.length,
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
