import React from 'react'
import { getStoreList } from '../data/shopping_data';
import { useState } from 'react';

function StoreSelections() {

    const [showStores, setShowStores] = useState(false);

    const handleButtonClick = () => {
        setShowStores(!showStores);
    }

    const stores = getStoreList();

    return (
        <div>
            <button onClick={handleButtonClick}>
                {showStores ? "Hide Stores" : "Show Stores"}
            </button>
            {showStores &&
                <div>
                    {stores.map(
                        (store) => (
                            <div key={store.tag}>
                                <input type="checkbox" value={store.tag} />
                                {store.name}
                            </div>
                        )
                    )}
                </div>
            }
        </div>
    )
}

export default StoreSelections

