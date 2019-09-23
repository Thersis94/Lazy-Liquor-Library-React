import React from "react";

export class DrinkHighlighters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlighted: []
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(e) {
    const newItem = e.target.attributes[3].value;
    let newState = this.state.highlighted;
    
    newState = newState.push('newItem');
    console.log(newItem)
    this.setState({
      highlighted: newState
    });
    console.log(this.state.highlighted);
  }
  render() {
    return (
      <div>
        <div className="drink-selectors">
          <div className="flex-left">
            <label className="drink-icons" htmlFor="Vodka">
              <img
                id="vodka-pic"
                className="drink-icon-img"
                alt="Vodka, will filter drinks by vodka if clicked"
                value="vodka"
                src="https://products0.imgix.drizly.com/ci-smirnoff-no-21-vodka-2b29fd1a14c47157.jpeg?auto=format%2Ccompress&dpr=2&fm=jpeg&h=240&q=20"
                onClick={e => {
                  this.addItem(e);
                }}
              />
              <input type="checkbox" id="Vodka" value="vodka" name="spirits" />
            </label>
            <label className="drink-icons" htmlFor="Gin">
              <img
                id="gin-pic"
                className="drink-icon-img"
                alt="Gin, will filter drinks by gin if clicked"
                value="gin"
                src="https://static.vinepair.com/wp-content/uploads/2019/01/hendricks-card.jpg"
                onClick={e => {
                  this.addItem(e);
                }}
              />
              <input type="checkbox" id="Gin" value="gin" name="spirits" />
            </label>
          </div>
          <div className="flex-right">
            <label className="drink-icons" htmlFor="Whiskey">
              <img
                id="whiskey-pic"
                className="drink-icon-img"
                alt="Wiskey, will filter drinks by whiskey if clicked"
                src="https://products3.imgix.drizly.com/ci-jack-daniels-old-no-7-92707d5e737cf4ac.jpeg?auto=format%2Ccompress&dpr=2&fm=jpeg&h=240&q=20"
              />
              <input
                type="checkbox"
                id="Whiskey"
                value="whisky"
                name="spirits"
              />
            </label>
            <label className="drink-icons" htmlFor="Tequila">
              <img
                id="tequila-pic"
                className="drink-icon-img"
                alt="Tequila, will filter drinks by tequila if clicked"
                src="https://www.wallywine.com/media/catalog/product/cache/1/image/1800x/9df78eab33525d08d6e5fb8d27136e95/1/2/12183.jpg"
              />
              <input
                type="checkbox"
                id="Tequila"
                value="tequila"
                name="spirits"
              />
            </label>
          </div>
        </div>
      </div>
    );
  }
}
