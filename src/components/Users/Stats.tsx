import { StatsInfo } from './contants'

const Stats = () => {
  return (
    <div className="users__stats">
      <h2 className="users__stats__title">Users</h2>
      <div className="users__stats__content">
        {StatsInfo.map((item) => (
          <div className="users__stats__card" key={item.id}>
            <img src={item.icon} alt={item.type} />
            <h4 className="users__stats__card--type">{item.type}</h4>
            <h3 className="users__stats__card--value">
              {item.value.toLocaleString()}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats
