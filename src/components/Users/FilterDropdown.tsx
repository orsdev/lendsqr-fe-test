import { FC } from 'react'
import { map } from 'lodash'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { DatePicker } from 'antd'

interface IFilterProps {
  name: string
  label: string
  formik: any
  placeholder?: string
  options?: string[]
}
interface IFilterDropdownProps {
  organizations: any[]
  onSubmit: (value: IFormikValues) => void
  onReset: () => void
}
export interface IFormikValues {
  orgName: string
  email: string
  userName: string
  phoneNumber: string
  status: string
  createdAt: any
}

const ValidationSchema = Yup.object({
  orgName: Yup.string(),
  email: Yup.string(),
  userName: Yup.string(),
  phoneNumber: Yup.string(),
  status: Yup.string(),
  createdAt: Yup.mixed()
})

const FilterTextInput: FC<IFilterProps> = ({
  name,
  label,
  formik,
  placeholder = ''
}) => (
  <div className="filter__dropdown__input">
    <label htmlFor={name}>{label}</label>
    <input
      type="text"
      name={name}
      id={name}
      value={formik.values[name]}
      placeholder={placeholder}
      onChange={formik.handleChange}
    />
  </div>
)

const FilterSelectInput: FC<IFilterProps> = ({
  name,
  label,
  formik,
  options = [],
  placeholder = ''
}) => (
  <div className="filter__dropdown__select">
    <label htmlFor={name}>{label}</label>
    <select
      name={name}
      id={name}
      placeholder={placeholder}
      value={formik.values[name]}
      onChange={formik.handleChange}
    >
      <option value="" disabled>
        Select
      </option>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  </div>
)

const FilterDropdown: FC<IFilterDropdownProps> = ({
  organizations,
  onSubmit,
  onReset
}) => {
  const formik = useFormik<IFormikValues>({
    initialValues: {
      email: '',
      orgName: '',
      status: '',
      createdAt: undefined,
      phoneNumber: '',
      userName: ''
    },
    validationSchema: ValidationSchema,
    onSubmit: (values: IFormikValues) => {
      onSubmit(values)
    }
  })

  return (
    <div className="filter__dropdown">
      <form onSubmit={formik.handleSubmit}>
        <FilterSelectInput
          name="orgName"
          placeholder="Select"
          label="Organization"
          formik={formik}
          options={map(organizations, (item) => item?.orgName)}
        />
        <FilterTextInput
          name="userName"
          placeholder="User"
          label="Username"
          formik={formik}
        />
        <FilterTextInput
          name="email"
          placeholder="Email"
          label="Email"
          formik={formik}
        />
        <div className="filter__dropdown__date">
          <div>
            <label htmlFor="date">Date</label>
          </div>

          <DatePicker
            className="filter__dropdown__date-picker"
            value={formik.values.createdAt}
            onChange={(date) => {
              void formik.setFieldValue('createdAt', date)
            }}
          />
        </div>
        <FilterTextInput
          name="phoneNumber"
          placeholder="Phone Number"
          label="Phone Number"
          formik={formik}
        />
        <FilterSelectInput
          name="status"
          placeholder="Status"
          label="Status"
          formik={formik}
          options={['Active', 'Inactive', 'Pending', 'Blacklisted']}
        />
        <div className="filter__dropdown__button">
          <button
            type="button"
            className="filter__dropdown__button-reset"
            onClick={(e) => {
              formik.handleReset(e)
              onReset()
            }}
          >
            Reset
          </button>
          <button type="submit" className="filter__dropdown__button-filter">
            Filter
          </button>
        </div>
      </form>
    </div>
  )
}

export default FilterDropdown
