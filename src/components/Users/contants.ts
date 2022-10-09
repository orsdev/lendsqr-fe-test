import {
  CoinOverlay,
  GroupOverlay,
  NoteOverlay,
  UsersOverlay
} from 'components/contants/assets'

export const StatsInfo = [
  {
    id: '021',
    icon: UsersOverlay,
    type: 'Users',
    value: 2453
  },
  {
    id: '022',
    icon: GroupOverlay,
    type: 'Active Users',
    value: 2453
  },
  {
    id: '023',
    icon: NoteOverlay,
    type: 'Users with Loans',
    value: 12453
  },
  {
    id: '024',
    icon: CoinOverlay,
    type: 'Users with Savings',
    value: 102453
  }
]

export const UserDetailsRoute = [
  {
    title: 'General Details',
    pathname: 'general'
  },
  {
    title: 'Documents',
    pathname: 'documents'
  },
  {
    title: 'Bank Details',
    pathname: 'bank'
  },
  {
    title: 'Loans',
    pathname: 'loans'
  },
  {
    title: 'Savings',
    pathname: 'savings'
  },
  {
    title: 'App and System',
    pathname: 'app-and-system'
  }
]
