import React from 'react';



import {connect} from 'react-redux';

import './shoppage.styles.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component{
    /*constructor(props){
        super(props);

        this.state = {
            collections : SHOP_DATA
        }
    }*/


    render(){
        const {collection} = this.props;
        return(
            collection?(
            <div className="shop-page">
                {
                    collection.map(({id,...otherCollectionProps})=>(
                      <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
                 ))
                }
            </div>
            ):(<h1>Nothing here</h1>)
        )
    }
}


const mapStatetoProps = state =>({
    currentUser : state.user.currentUser,
    collection: state.collection.item
})

export default connect(mapStatetoProps)(ShopPage);