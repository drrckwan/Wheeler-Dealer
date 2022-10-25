import React from 'react';


class SalesList extends React.Component {
    constructor(props){
        super(props);

        this.state = {sales: props.sales};

    }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Sales Person (Employee Number)</th>
                    <th>Purchaser Name</th>
                    <th>Automobile Vin</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {this.state.sales.map(sale => {
                    return (
                    <tr key={sale.id}>
                        <td>{ sale.sales_person.name }  ({sale.sales_person.employee_number})</td>
                        <td>{ sale.customer.name }</td>
                        <td>{ sale.automobile.vin }</td>
                        <td>{ sale.price }</td>
                    </tr>
                    );
                })}

                </tbody>
            </table>
        );
    }
}

export default SalesList;