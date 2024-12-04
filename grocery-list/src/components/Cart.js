import Item from './Item';
import { useState } from 'react';

// Defines grocery cart.
function Cart(props) {

    // Retrieves shopping list from props.
    const shoppingList = props.shoppingList;

    return (
        <div>
            {shoppingList.map(
                (itm) => (
                    <div key={itm.id}>
                        <Item name={itm.name}
                            quantity={itm.quantity}
                            store={itm.store}
                            food={itm.food}
                        />
                    </div>
                )
            )}
        </div>
    )
}

export default Cart
