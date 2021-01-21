import React, { Component } from 'react';

class CardProduct extends Component {
    state = {
        days: 0,
        title: "status hari : - "
    }

    handlerDaysBerubah = (newvalue) => {
        this.props.onDaysChange(newvalue)
    }

    handlerTambah = () => {
        if (this.state.days < 31) {
            this.setState({
                days: this.state.days + 1,
                title: "status hari : di tambah",
            }, () => {
                this.handlerDaysBerubah(this.state.days)
            })
            
        }else if (this.state.days === 31) {
            alert("Maksimal hari dalam sebulan itu 31 tau!")
        }
    }

    handlerKurang = () => {
        if (this.state.days > 0) {
            this.setState({
                days: this.state.days - 1,
                title: "status hari : di kurang"
            }, () => {
                this.handlerDaysBerubah(this.state.days)
            })
        }
    }

    render() {
        return (
            <div>
                <div class="card text-center">
                    <div class="card-header">
                        Tambah - Kurang Hari
                </div>
                    <div class="card-body">
                        <h5 class="card-title">{this.state.title}</h5>
                        <p class="card-text">Mari tambah dan kurangi hari disini! seru tau!</p>
                        <div class="card-body">
                            <p class="card-text">Tambah Hari disini</p>
                            <a href="#" class="btn btn-primary" onClick={this.handlerTambah}>Tambah hari</a>
                        </div>
                        <div>
                            <p class="card-text">Kurangi hari disini</p>
                            <a href="#" class="btn btn-primary" onClick={this.handlerKurang}>kurangi hari</a>
                        </div>
                    </div>
                    <div class="card-footer text-muted">
                        Hari ke {this.state.days}
                    </div>
                </div>
            </div>
        )
    }
}
export default CardProduct;