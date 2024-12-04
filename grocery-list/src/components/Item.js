import { useState } from 'react';

import '../styles/grocery.css'

import QuantityModal from './QuantityModal';
import StoreModal from './StoreModal';
import { getStoreList } from '../data/shopping_data';

/** 
 * Describes grocery item component.
 * @param {object} item - Item object.
 */
function Item(item) {

    // Controls store selection modal.
    const [showStoreModal, setShowStoreModal] = useState(false);

    // Controls quantity selection modal.
    const [showQuantityModal, setShowQuantityModal] = useState(false);

    // Manages selected store state.
    const [selectedStore, setSelectedStore] = useState(item.store);

    // Manages selected quantity state. 
    const [selectedQuantity, setSelectedQuantity] = useState(item.quantity);

    /*
    * Handles checkbox click event. Use this function to track purchases. 
    */
    const handleClick = (e) => {
        if (e.target.checked) {
            console.log("Item selected");
        }
        if (!e.target.checked) {
            console.log("Item deselected");
        }
    }

    // Displays store selection modal. 
    const handleStoreClick = () => {
        setShowStoreModal(true);
    }

    // Closes store selection modal.
    const handleStoreCloseModal = () => {
        setShowStoreModal(false);
    }

    // Displays store selection modal and captures seleciton.
    const handleStoreSelect = (store) => {
        setSelectedStore(store);
        setShowStoreModal(false);
    }

    // Displays quantity selection modal.
    const handleQuantityClick = () => {
        setShowQuantityModal(true);
    }

    // Closes quantity selection modal.
    const handleQuantityCloseModal = () => {
        setShowQuantityModal(false);
    }

    // Displays quantity selection modal and captures selection.
    const handleQuantitySelect = (value) => {
        setSelectedQuantity(value);
        setShowQuantityModal(false);
    }

    // Retrieves store list.
    const stores = getStoreList();

    return (

        // Displays item name, checkbox, store, and quantity.
        <div>
            <label>
                <input type="checkbox" onClick={handleClick} />
                {item.name}
            </label>

            {/* Displays quantity and captures selection when changed. */}
            <input type="button" value={selectedQuantity} onClick={handleQuantityClick} />
            <QuantityModal show={showQuantityModal} onClose={handleQuantityCloseModal}>
                <h2>Select Quantity</h2>
                {[1, 2, 3, 4, 5].map((value, index) => (
                    <div key={index} className="store-tag" onClick={() => handleQuantitySelect(value)} >
                        {value}
                    </div>
                ))}
            </QuantityModal>

            {/* Displays store and captures selection when changed. */}
            <input type="button" value={selectedStore.tag} onClick={handleStoreClick} />
            <StoreModal show={showStoreModal} onClose={handleStoreCloseModal}>
                <h2>Select Store</h2>
                {stores.map((store, index) => (
                    <div key={index} className="store-tag" onClick={() => handleStoreSelect(store)} >
                        {store.name}
                    </div>
                ))}
            </StoreModal>
        </div>
    )
}

export default Item
