import React from 'react'
import PropTypes from 'prop-types'
import SizeList from '../components/SizeList'

class ProductItem extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      product: this.props.product,
      selectedsize: Object.keys(this.props.product.sizes)[0],
      selectedsource: 0 
    };
  }

  handelSize = (e) => {
    this.setState({
      selectedsize: e.value,
      selectedsource: 0
    }, () => {
      console.log(this.state);
    });
  }

  handelSource = (e) => {
    this.setState({
      selectedsource: e.value
    }, () => {
      console.log(this.state);
    });
  }

  render(){
    let source = this.state.selectedsize != undefined && this.state.product.sizes[this.state.selectedsize].sources[this.state.selectedsource];
    let price;

    if(this.state.selectedsize != undefined && this.state.product.price > source.discounted_price){
      price = <span><strike>{this.state.product.price}</strike> {source.discounted_price}</span>
    } else {
      price = <span> {this.state.product.price} </span>
    }
    return(
      <div className="item-wrapper">
        <div className="item-container">
          <div className="product-img">
            <img src={this.state.product.image} alt={this.state.product.title} />
          </div>
          <div className="product-details">
            <div className="brand-name">{this.state.product.brand}</div>
            <div className="product-name">{this.state.product.title}</div>
            <div className="package-detail">{this.state.product.sex} {this.state.product.color} {this.state.product.category} </div>
            <div className="product-price">{price}</div>
            <SizeList 
              sizeData={this.state.product.sizes}
              selectedsize={this.state.selectedsize}
              selectedsource={this.state.selectedsource}
              onSizeChange={this.handelSize}
              onSourceChange={this.handelSource}
            />
            <div>
              {source.stock > 0 && source.stock + " unit left"}
              <div>
                <button
                  onClick={() => this.props.onAddToCartClicked(
                    this.state.product.id, 
                    this.state.selectedsize, 
                    this.state.selectedsource
                  )}
                  disabled={source.stock > 0 ? '' : 'disabled'}>
                  {source.stock > 0 ? 'Add to cart' : 'Out of stock'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default ProductItem
