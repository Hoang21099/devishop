import React from 'react';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection=({title,items})=>(
    <div className="collection-preview">
        <div className="title"><h1>{title}</h1></div>
        <div className="preview">
            {
                items.filter((item,index)=>index<4).map(({id,...otherItemProps})=>(
                    //<div key={item.id}>{item.name}</div>
                    <CollectionItem key={id} {...otherItemProps}></CollectionItem>
                ))
            }
        </div>
    </div>
)


export default PreviewCollection;
