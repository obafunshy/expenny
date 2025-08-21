'use client';

export default function SubscriptionForm() {
    return (
        <section>
            <h2>Add a new subscription</h2>
            <form onSubmit={() => {}}>
                <label>
                    <span>Subscription Name</span>
                    <input type="text" name="name" placeholder="e.g. Netflix, Spotify, AWS Hosting" required />
                </label>
                <label>
                    <span>Category</span>
                    <select name="category">
                        {['Entertainment', 'Music', 'Software', 'Web Services', 'Health & Fitness', 'Other'].map((
                            cat, catIndex) =>
                             (<option key={catIndex}>{cat}</option>)                                
                        )}
                    </select>
                </label>

                <label>
                    <span>Cost</span>
                    <input type="number" name="cost" step="0.01" placeholder="e.g. 12.00" required />
                </label>

                <label>
                    <span>Currency</span>
                    <select name="currency">
                        {['GBP', 'EUR', 'USD', 'NZD', 'AUD', 'Other'].map((
                            curr, currIndex) =>
                             (<option key={currIndex}>{curr}</option>)                                
                        )}
                    </select>
                </label>

                <label>
                    <span>Billing Frequency</span>
                    <select name="billingFrequency">
                        {['Monthly', 'Yearly', 'Quarterly', 'One-time'].map((
                            bill, billIndex) =>
                             (<option key={billIndex}>{bill}</option>)                                
                        )}
                    </select>
                </label>

                <label>
                    <span>Payment Method</span>
                    <select name="paymentMethod">
                        {['Credit Card', 'Debit Card', 'Paypal', 'Bank Transfer', 'Other'].map((
                            pay, payIndex) =>
                             (<option key={payIndex}>{pay}</option>)                                
                        )}
                    </select>
                </label>

                <label>
                    <span>Subscription Start Date</span>
                    <input type="date" name="startDate" required />
                </label>

               <label>
                    <span>Status</span>
                    <select name="status">
                        {['Active', 'Paused', 'Cancelled'].map((
                            status, statusIndex) =>
                             (<option key={statusIndex}>{status}</option>)                                
                        )}
                    </select>
                </label>

                <label className="fat-column">
                    <span>Notes</span>
                    <textarea name="notes" placeholder="e.g. Shared with family, includes cloud storage" />
                </label>

                <div className="fat-column form-submit-btns">
                    <button>Cancel</button>
                    <button type="submit">Add Subscription</button>
                </div>
            </form>
        </section>
    )
}