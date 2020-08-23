import React from 'react'

export default function Filter({ count, handleSizeChange}) {
    return (
        <div>
            {count} products found
            <div>
                <select>
                    <option value=""> Select </option>
                    <option value="highest"> Highest to Lowest </option>
                    <option value="lowest"> Lowest to Highest </option>
                </select>
            </div>
            <div>
                <select onChange={handleSizeChange}>
                    <option value=""> ALL</option>
                    <option value="XS"> XS</option>
                    <option value="S"> S </option>
                    <option value="M"> M</option>
                    <option value="L"> L</option>
                    <option value="XL"> XL</option>
                    <option value="XXL"> XXL</option>
                </select>
            </div>
        </div>
    )
}
