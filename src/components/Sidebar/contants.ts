import {
  Bank,
  Bar,
  Briefcase,
  Coins,
  Division,
  Galaxy,
  Group,
  Loans,
  Log,
  Preferences,
  Request,
  Savings,
  Scroll,
  Shake,
  Transactions,
  UserCheck,
  UserCog,
  UserMinus,
  Users,
  Wheel
} from 'components/contants/assets'

export const CustomersMenuNavigation = [
  {
    icon: Users,
    title: 'Users',
    route: '/dashboard/users'
  },
  {
    icon: Group,
    title: 'Guarantors',
    route: '/dashboard/guarantors'
  },
  {
    icon: Loans,
    title: 'Loans',
    route: '/dashboard/loans'
  },
  {
    icon: Shake,
    title: 'Decision Models',
    route: '/dashboard/decision-models'
  },
  {
    icon: Savings,
    title: 'Savings',
    route: '/dashboard/savings'
  },
  {
    icon: Request,
    title: 'Loan Requests',
    route: '/dashboard/loan-requests'
  },
  {
    icon: UserCheck,
    title: 'Whitelist',
    route: '/dashboard/whitelist'
  },
  {
    icon: UserMinus,
    title: 'Karma',
    route: '/dashboard/karma'
  }
]

export const BusinessesMenuNavigation = [
  {
    icon: Briefcase,
    title: 'Organization',
    route: '/dashboard/organization'
  },
  {
    icon: Request,
    title: 'Loan Products',
    route: '/dashboard/loan-products'
  },
  {
    icon: Bank,
    title: 'Savings Products',
    route: '/dashboard/products-savings'
  },
  {
    icon: Coins,
    title: 'Fees and Charges',
    route: '/dashboard/Fees-and-charges'
  },
  {
    icon: Transactions,
    title: 'Transactions',
    route: '/dashboard/transactions'
  },
  {
    icon: Galaxy,
    title: 'Services',
    route: '/dashboard/services'
  },
  {
    icon: UserCog,
    title: 'Service Account',
    route: '/dashboard/service-account'
  },
  {
    icon: Scroll,
    title: 'Settlements',
    route: '/dashboard/settlements'
  },
  {
    icon: Bar,
    title: 'Reports',
    route: '/dashboard/reports'
  }
]

export const SettingsMenuNavigation = [
  {
    icon: Preferences,
    title: 'Preferences',
    route: '/dashboard/preferences'
  },
  {
    icon: Division,
    title: 'Fees and Pricing',
    route: '/dashboard/fees-and-pricing'
  },
  {
    icon: Log,
    title: 'Audit Logs',
    route: '/dashboard/audit-logs'
  },
  {
    icon: Wheel,
    title: 'Systems Messages',
    route: '/dashboard/system-messages'
  }
]
