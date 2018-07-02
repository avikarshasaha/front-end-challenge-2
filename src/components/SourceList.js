import React from 'react'
import PropTypes from 'prop-types'
import RadioButton from '../components/RadioButton'

const SourceList = ({ sourceData, selectedsource, onSourceChange }) => (
  <div className="souce-container">
  { sourceData.length > 0 &&
    sourceData.map((source, index) => (
      <RadioButton
        key={index}
        label={source.host.split(' ').map(w => w[0].toUpperCase())}
        value={index}
        onChange={onSourceChange}
        checked = {selectedsource == index}
      />
    )
  )}
  </div>
)


export default SourceList
