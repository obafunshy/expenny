'use client';

import { useState } from "react";

export default function SubscriptionForm(props) {
    const { onSubmit, closeInput } = props

    const [formData, setFormData] = useState({
        name: '',
        category: 'Web Services',
        cost: '',
        currency: 'GBP',
        billingFrequency: 'Monthly',
        nextBillingData: '',
        paymentMethod: 'Credit Card',
        startDate: '',
        renewalType: '',
        notes: '',
        status: 'Active'
    })

    function handleChangeInput(e) {
        const newData = { 
            ...formData,
            [e.target.name]: e.target.value 
        }
        setFormData(newData)
    }

    function handleFormSubmit(e) {
        e.preventDefault()

    }

    return (
        <section>
            <h2>Add a new subscription</h2>
            <form onSubmit={handleFormSubmit}>
                <label>
                    <span>Subscription Name</span>
                    <input type="text" value={formData.name} onChange={handleChangeInput} name="name" placeholder="e.g. Netflix, Spotify, AWS Hosting" required />
                </label>
                <label>
                    <span>Category</span>
                    <select value={formData.name} onChange={handleChangeInput} name="category">
                        {['Entertainment', 'Music', 'Software', 'Web Services', 'Health & Fitness', 'Other'].map((
                            cat, catIndex) =>
                             (<option key={catIndex}>{cat}</option>)                                
                        )}
                    </select>
                </label>

                <label>
                    <span>Cost</span>
                    <input type="number" name="cost" value={formData.cost} onChange={handleChangeInput} step="0.01" placeholder="e.g. 12.00" required />
                </label>

                <label>
                    <span>Currency</span>
                    <select name="currency" value={formData.currency} onChange={handleChangeInput}>
                        {['GBP', 'EUR', 'USD', 'NZD', 'AUD', 'Other'].map((
                            curr, currIndex) =>
                             (<option key={currIndex}>{curr}</option>)                                
                        )}
                    </select>
                </label>

                <label>
                    <span>Billing Frequency</span>
                    <select name="billingFrequency" value={formData.billingFrequency} onChange={handleChangeInput}>
                        {['Monthly', 'Yearly', 'Quarterly', 'One-time'].map((
                            bill, billIndex) =>
                             (<option key={billIndex}>{bill}</option>)                                
                        )}
                    </select>
                </label>

                <label>
                    <span>Payment Method</span>
                    <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChangeInput}> 
                        {['Credit Card', 'Debit Card', 'Paypal', 'Bank Transfer', 'Other'].map((
                            pay, payIndex) =>
                             (<option key={payIndex}>{pay}</option>)                                
                        )}
                    </select>
                </label>

                <label>
                    <span>Subscription Start Date</span>
                    <input type="date" name="startDate" value={formData.startDate} onChange={handleChangeInput} required />
                </label>

               <label>
                    <span>Status</span>
                    <select name="status" value={formData.status} onChange={handleChangeInput}>
                        {['Active', 'Paused', 'Cancelled'].map((
                            status, statusIndex) =>
                             (<option key={statusIndex}>{status}</option>)                                
                        )}
                    </select>
                </label>

                <label className="fat-column">
                    <span>Notes</span>
                    <textarea name="notes" value={formData.notes} onChange={handleChangeInput} placeholder="e.g. Shared with family, includes cloud storage" />
                </label>

                <div className="fat-column form-submit-btns">
                    <button onClick={closeInput}>Cancel</button>
                    <button type="submit">Add Subscription</button>
                </div>
            </form>
        </section>
    )
}