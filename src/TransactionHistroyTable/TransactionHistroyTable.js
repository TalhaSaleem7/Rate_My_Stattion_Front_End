import React from 'react'

const TransactionHistroyTable = () => {

    const rows = Array.from({ length: 5 }); 

  return (
    <>
        <div className="transaction_histroy_table">
            <table>
                <thead>
                    <tr>
                        <th><select name="" id="">
                            <option value="">Transaction ID</option>
                            <option value="">Transaction ID</option>
                            <option value="">Transaction ID</option>
                        </select></th>
                        <th><select name="" id="">
                            <option value="">Withdrawal Options</option>
                            <option value="">Withdrawal Options</option>
                            <option value="">Withdrawal Options</option>
                        </select></th>
                        <th><select name="" id="">
                            <option value="">Billing Information</option>
                            <option value="">Billing Information</option>
                            <option value="">Billing Information</option>
                        </select></th>
                        <th><select name="" id="">
                            <option value="">Amount</option>
                            <option value="">Amount</option>
                            <option value="">Amount</option>
                        </select></th>
                        <th><select name="" id="">
                            <option value="">Date Requested</option>
                            <option value="">Date Requested</option>
                            <option value="">Date Requested</option>
                        </select></th>
                        <th><select name="" id="">
                            <option value="">Status</option>
                            <option value="">Status</option>
                            <option value="">Status</option>
                        </select></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><h4>#36960</h4></td>
                        <td><h3>Paypal</h3></td>
                        <td><p>user@mail.com</p></td>
                        <td><h6>$3.845.57</h6></td> 
                        <td><h5>June 23, 2022</h5></td>
                        <td><a href="#" className="transaction_progress_btn">In progress</a></td>
                    </tr>
                    {rows.map((row) => ( <tr>
                        <td><h4>#36960</h4></td>
                        <td><h3>Bank Transfer</h3></td>
                        <td><p>Bank -  Account Name</p></td>
                        <td><h6>$3.845.57</h6></td>
                        <td><h5>June 23, 2022</h5></td>
                        <td><a href="#" className="transaction_paid_btn">Paid - June 25, 2022</a></td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default TransactionHistroyTable