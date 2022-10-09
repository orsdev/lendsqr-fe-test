import { Spin } from 'antd'

const Spinner = ({ tip = '' }: { tip?: string }) => {
  return (
    <div className="cm__spinner">
      <Spin size="large" tip={tip} />
    </div>
  )
}

export default Spinner
