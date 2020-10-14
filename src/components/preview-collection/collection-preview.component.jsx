import React from 'react'

import './collection-preview.styles.scss'

import CollectionItem from '../collection-item/collection-item.component'

//functional component -> when we need it only for rendering some html - without logic 

// {title, items} - these parameters must have same name as attributes of ...otherCollectionProps
// {title, items} -actually these are parameters which this component accepts from shop component.
// items is list of items of some category
const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items 
                .filter((item, idx)=> idx < 4)
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps}/>
            ))}
        </div>
    </div>
    
)

export default CollectionPreview;