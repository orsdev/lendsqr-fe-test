import { Divider } from 'antd'
import { ReactNode } from 'react'
import { useOutletContext } from 'react-router-dom'
import { concatString, userMonthlyIncomeRange } from 'utills'

const GeneralTitle = ({ title }: { title: string }) => (
  <h3 className="users__general__title">{title}</h3>
)

const GeneralContent = ({
  label,
  value,
  others
}: {
  label: string
  value?: string
  others?: ReactNode
}) => (
  <div>
    <h4 className="users__general__label">{label}</h4>
    {Boolean(value) && <h4 className="users__general__value">{value}</h4>}
    {Boolean(others) && <h4 className="users__general__value">{others}</h4>}
  </div>
)

const General = () => {
  const user: any = useOutletContext()

  return (
    <div className="users__general">
      {/* Personal Information */}
      <div>
        <GeneralTitle title="Personal Information" />

        <div className="users__general__grid">
          <GeneralContent
            label="full Name"
            value={
              concatString(user?.profile?.lastName, user?.profile?.firstName) ??
              'Not Provided'
            }
          />
          <GeneralContent
            label="Phone Number"
            value={user?.profile?.phoneNumber ?? 'Not Provided'}
          />
          <GeneralContent
            label="Email Address"
            value={user?.email ?? 'Not Provided'}
          />
          <GeneralContent
            label="Bvn"
            value={user?.profile?.bvn ?? 'Not Provided'}
          />
          <GeneralContent
            label="Gender"
            value={user?.profile?.gender ?? 'Not Provided'}
          />
          <GeneralContent
            label="Marital Status"
            value={user?.profile?.maritalStatus ?? 'Not Provided'}
          />
          <GeneralContent
            label="Children"
            value={user?.profile?.children ?? 'Not Provided'}
          />
          <GeneralContent
            label="Type of residence"
            value={user?.profile?.residence ?? 'Not Provided'}
          />
        </div>
      </div>

      <Divider
        style={{
          marginBottom: '30px',
          marginTop: 0
        }}
      />

      {/* Education and Employment */}
      <div>
        <GeneralTitle title="Education and Employment" />

        <div className="users__general__grid">
          <GeneralContent
            label="Level of Education"
            value={user?.education?.level ?? 'Not Provided'}
          />
          <GeneralContent
            label="employment status"
            value={user?.education?.employmentStatus ?? 'Not Provided'}
          />
          <GeneralContent
            label="sector of employment"
            value={user?.education?.sector ?? 'Not Provided'}
          />
          <GeneralContent
            label="Duration of employment"
            value={user?.education?.duration ?? 'Not Provided'}
          />
          <GeneralContent
            label="office email"
            value={user?.education?.officeEmail ?? 'Not Provided'}
          />
          <GeneralContent
            label="Monthly income"
            others={
              <div>
                &#8358;
                <span>
                  {userMonthlyIncomeRange(user?.education?.monthlyIncome).min}
                </span>
                <span> - </span>
                &#8358;
                <span>
                  {userMonthlyIncomeRange(user?.education?.monthlyIncome).max}
                </span>
              </div>
            }
          />
          <GeneralContent
            label="loan repayment"
            value={user?.education?.loanRepayment ?? 'Not Provided'}
          />
        </div>
      </div>

      <Divider
        style={{
          marginBottom: '30px',
          marginTop: 0
        }}
      />

      {/* Socials */}
      <div>
        <GeneralTitle title="Socials" />

        <div className="users__general__grid">
          <GeneralContent
            label="Twitter"
            value={user?.socials?.twitter ?? 'Not Provided'}
          />
          <GeneralContent
            label="Facebook"
            value={user?.socials?.facebook ?? 'Not Provided'}
          />
          <GeneralContent
            label="Instagram"
            value={user?.socials?.instagram ?? 'Not Provided'}
          />
        </div>
      </div>

      <Divider
        style={{
          marginBottom: '30px',
          marginTop: 0
        }}
      />

      {/* Guarantor */}
      <div>
        <GeneralTitle title="Guarantor" />

        <div className="users__general__grid">
          <GeneralContent
            label="full Name"
            value={
              concatString(
                user?.guarantor?.lastName,
                user?.guarantor?.firstName
              ) ?? 'Not Provided'
            }
          />
          <GeneralContent
            label="Phone number"
            value={user?.guarantor?.phoneNumber ?? 'Not Provided'}
          />
          <GeneralContent
            label="Email"
            value={user?.guarantor?.email ?? 'Not Provided'}
          />
          <GeneralContent
            label="Relationship"
            value={user?.guarantor?.relationship ?? 'Not Provided'}
          />
        </div>
      </div>
    </div>
  )
}

export default General
