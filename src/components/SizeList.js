import React from 'react'
import PropTypes from 'prop-types'
import RadioButton from '../components/RadioButton'
import SourceList from '../components/SourceList'

const SizeList = ({ sizeData, selectedsize, selectedsource, onSizeChange, onSourceChange }) => (
  <div>
    <div className="size-container">
    { Object.keys(sizeData).length > 0 &&
      Object.keys(sizeData).map((s, i) => (
        <RadioButton
          key={i}
          label={s}
          value={s}
          checked = {selectedsize === s}
          onChange={onSizeChange}
        />
      )
    )}
    </div>
    <div className="clearfix"></div>
    {Object.keys(sizeData).length > 0 && 
      <SourceList 
        sourceData={sizeData[selectedsize].sources}
        selectedsource={selectedsource}
        onSourceChange={onSourceChange}
      />
    }
  </div>
)


export default SizeList
