import React, { Component } from 'react';
import CardProduct from '../../Component/CardProduct/CardProduct'

class Product extends Component {
    state = {
        days: 0
    }
    handlerDaysChange = (newvalue) => {
        this.setState({ days: newvalue })
    }
    render() {
        return (
            <div class="card text-center">
                <div class="card-body">
                    <CardProduct onDaysChange={(value) => this.handlerDaysChange(value)} />
                    <div class="card-body">
                        <h1 class="card-title"> Jumlah Hari : {this.state.days}</h1>
                    </div>
                </div>
            </div>

        )
    }
}
export default Product;