import Item from './Item';

/**
 * Describes grocery cart component.
 * @param {object} props - Component properties.
 */
function Cart(props) {

    // Retrieves shopping list from props.
    const { shoppingList } = props;

    return (
        <div>
            <h1 className="title center">Shopping Buddy</h1>
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
