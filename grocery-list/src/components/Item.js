import React from 'react'
import '../styles/grocery.css'
import { getStoreList } from '../data/shopping_data';
import { useState } from 'react';
import StoreModal from './StoreModal';
import QuantityModal from './QuantityModal';

// Defines grocery item.
function Item(item) {

    const [showStoreModal, setShowStoreModal] = useState(false);
    const [showQuantityModal, setShowQuantityModal] = useState(false);
    const [selectedStore, setSelectedStore] = useState(item.store);
    const [selectedQuantity, setSelectedQuantity] = useState(item.quantity);

    const handleClick = () => {
        console.log("Item clicked");
        alert("You selected: " + item.name);
    }

    const handleStoreClick = () => {
        setShowStoreModal(true);
    }

    const handleStoreCloseModal = () => {
        setShowStoreModal(false);
    }

    const handleStoreSelect = (store) => {
        setSelectedStore(store);
        setShowStoreModal(false);
    }

    const handleQuantityClick = () => {
        setShowQuantityModal(true);
    }

    const handleQuantityCloseModal = () => {
        setShowQuantityModal(false);
    }

    const handleQuantitySelect = (value) => {
        setSelectedQuantity(value);
        setShowQuantityModal(false);
    }

    const stores = getStoreList();

    return (
        <div>
            <label>
                <input type="checkbox" onClick={handleClick} />
                {item.name}
            </label>

            <input type="button" value={selectedQuantity} onClick={handleQuantityClick} />
            <QuantityModal show={showQuantityModal} onClose={handleQuantityCloseModal}>
                <h2>Select Quantity</h2>
                {[1, 2, 3, 4, 5].map((value, index) => (
                    <div key={index} className="store-tag" onClick={() => handleQuantitySelect(value)} >
                        {value}
                    </div>
                ))}
            </QuantityModal>

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
