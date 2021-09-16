import React from 'react'

import './spinner.scss'

const Spinner = ({ className }) => {
  return (
    <svg
      className={`spinner ${className}`}
      id="prefix__Layer_1"
      data-name="Layer 1"
      viewBox="0 0 850.12 844.47"
    >
      <circle className="a" cx={425.06} cy={50.5} r={50} />
      <circle className="b" cx={247.59} cy={94.73} r={50} />
      <circle className="c" cx={115.19} cy={212.33} r={50} />
      <circle className="d" cx={50.5} cy={380.65} r={50} />
      <circle className="e" cx={72.97} cy={564.44} r={50} />
      <circle className="f" cx={174.35} cy={710.23} r={50} />
      <circle className="g" cx={332.11} cy={793.97} r={50} />
      <circle className="h" cx={518.01} cy={793.97} r={50} />
      <circle className="i" cx={675.77} cy={710.23} r={50} />
      <circle className="j" cx={777.15} cy={564.44} r={50} />
      <circle className="k" cx={799.62} cy={380.65} r={50} />
      <circle className="l" cx={734.92} cy={212.33} r={50} />
      <circle className="m" cx={602.52} cy={94.73} r={50} />
    </svg>
  )
}

export default Spinner