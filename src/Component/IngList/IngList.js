import React from 'react';


export default class IngList extends React.Component {



    generateIngList(ingArray) {
        return ingArray.map(function(ing) {
            return(
                <p className='ing-item'>
                    {ing}
                </p>
            )
        })
    }


    render() {
        return(
            <div>
                {this.generateIngList(this.props.ingArray)}
            </div>
        )
    }
}