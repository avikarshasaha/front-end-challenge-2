import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { onChangeStock, onChangeSource, onChangeSize } from '../actions'

const FilterContainer = ({stock, source, size, sizes, onChangeStock, onChangeSource, onChangeSize}) => {
  return (
    <div className="filter">
      <h3>Filters</h3>

      <div className='input-group'>
        <div className='input-group-prepend'>
            <label className='input-group-text' htmlFor='inputGroupSelect01'>Availability</label>
        </div>
        <select
            onChange={onChangeStock} 
            value={stock}
            className='custom-select' id='inputGroupSelect01'>
            <option value="instock">In Stock</option>
            <option value="outstock">Out Of Stock</option>
        </select>
    	</div>

    	<div className='input-group'>
        <div className='input-group-prepend'>
            <label className='input-group-text' htmlFor='inputGroupSelect02'>Source</label>
        </div>
        <select
            onChange={onChangeSource} 
            value={source}
            className='custom-select' id='inputGroupSelect02'>
            <option value="all">All</option>
            <option value="offline">Offline</option>
            <option value="online">Online</option>
        </select>
    	</div>

    	<div className='input-group'>
        <div className='input-group-prepend'>
            <label className='input-group-text' htmlFor='inputGroupSelect03'>Size</label>
        </div>
        <select multiple
        	onChange={onChangeSize}
          className='custom-select' id='inputGroupSelect03'>
          <option value="all">All</option>
          { sizes && sizes.map(i => (<option value={i} selected={size.indexOf(i) !== -1} >{i}</option>))}
        </select>
    	</div>

    </div>
  )
}


const mapStateToProps = state => ({
  stock: state.filter.stock,
  source: state.filter.source,
  size: state.filter.size,
  sizes: state.products.sizes,
})

export default connect(
  mapStateToProps,
  {onChangeStock, onChangeSource, onChangeSize}
)(FilterContainer)
