import React from 'react'
import Bucket from './Bucket'

export default function Table({ entries, handleDrop, enableThrash, disableThrash }) {

    // Using Flexbox instead of CSS Grid because of bad experiences with CSS Grid
    const strengthsContent = entries.filter(e => e.category === "strengths");
    const opportunitiesContent = entries.filter(e => e.category === "opportunities");
    const weaknessesContent = entries.filter(e => e.category === "weaknesses");
    const threatsContent = entries.filter(e => e.category === "threats");

    return (
        <div id="Table">
            <div className="Table__row">
                <Bucket title="Strengths" background="#218559BB" content={strengthsContent} category="strengths" handleDrop={handleDrop} enableThrash={enableThrash} disableThrash={disableThrash} />
                <Bucket title="Opportunities" background="#06A2CBBB" content={opportunitiesContent} category="opportunities" handleDrop={handleDrop} enableThrash={enableThrash} disableThrash={disableThrash} />
            </div>
            <div className="Table__row">
                <Bucket title="Weaknesses" background="#DD1E2FBB" content={weaknessesContent} category="weaknesses" handleDrop={handleDrop} enableThrash={enableThrash} disableThrash={disableThrash} />
                <Bucket title="Threats" background="#EBB035BB" content={threatsContent} category="threats" handleDrop={handleDrop} enableThrash={enableThrash} disableThrash={disableThrash} />
            </div>
        </div>
    )
}
