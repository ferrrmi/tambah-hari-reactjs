import React, { Component } from 'react';
import CardProduct from '../../Component/CardProduct/CardProduct'
import PictureSet from '../../Component/PictureSet/PictureSet'
import Input from '../../Component/Input/Input'

class Product extends Component {
    state = {
        days: 0
    }

    handlerDaysChange = (newvalue) => {
        this.setState({ days: newvalue })
    }
    render() {
        return (
            <div>
                <div class="card text-center">
                    <div class="card-body">
                        <CardProduct onDaysChange={(value) => this.handlerDaysChange(value)} />
                        <div class="card-body">
                            <h1 class="card-title"> Jumlah Hari : {this.state.days}</h1>
                        </div>
                        <div class="card text-center">
                            <div class="card-header">
                                Usada Pekora!
                            </div>
                            <div class="card-body">
                                <Input/>
                            </div>
                            <div class="card-body">
                                <div class="card-body">
                                    <PictureSet />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Product;