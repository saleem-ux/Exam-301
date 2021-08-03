import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import AllDataAPICard from './AllDataAPICard';
import UpdateForm from './UpdateForm';


class AllDataAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'http://localhost:3001',
            allData: [],
            showData: false
        }
    }
    componentDidMount = async () => {
        axios.get(`${this.state.url}/api`).then(result => {
            this.setState({
                allData: result.data,
                showData: true
            })
        })
    }

    addFavItem = async (item) => {
        const reqbody = {
            email: this.props.auth0.user.email,
            name: item.name,
            img: item.img
        }
        await axios.post(`${this.state.url}/fav`, reqbody);
    }
    render() {
        return (
            <>
                <div>
                    <h1>All Data from the API</h1>
                    <h3>Select your favorites :)</h3>
                </div>
                <AllDataAPICard showData={this.state.showData} allData={this.state.allData}  addFavItem={this.addFavItem}/>
            <UpdateForm showModal={this.state.showModal}/>
            </>
        )
    }
}

export default withAuth0(AllDataAPI);
