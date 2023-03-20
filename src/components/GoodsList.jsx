import {GoodsItem} from './GoodsItem'

import React from 'react'

function GoodsList(props) {
    const {goods = [], addTOBasket = Function.prototype} = props;

    if(!goods.length){
        return <h3>Nothing here</h3>
    }

    return <div className="goods">
        {goods.map(item => (
            <GoodsItem key={item.id} {...item} addTOBasket={addTOBasket}/>
        ))}
    </div>
}

export { GoodsList }