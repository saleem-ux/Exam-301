import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFavorites.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import MyFavoritiesCard from './MyFavoritiesCard'

class MyFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'http://localhost:3001',
      allFav: [],
      showFav: false,
      index: 0
    }
  }

  componentDidMount = async () => {
    axios.get(`http://localhost:3001/fav?email=quraanrazan282@gmail.com`).then(result => {
      this.setState({
        allFav: result.data,
        showFav: true
      })
    })
  }

  deleteFav = async (index) => {
    axios.delete(`${this.state.url}/fav/${index}?email=${this.props.auth0.user.email}`).then(result => {
      this.setState({
        allFav: result.data,
        showFav: true,
        showModal: false
      })
    })
  }
  updateFav = async (event) => {
    event.preventDefault();
    const reqbody = {
      email: this.props.auth0.user.email,
      name: event.target.name.value,
      img: event.target.img.value
    }
    axios.put(`${this.state.url}/fav/${this.state.index}`).then(result => {
      this.setState({
        allFav: result.data
      })
    })
  }

  handleClose = () => {
    this.setState({
      showModal: false
    })
  }

  handleShow = (index) => {
    this.setState({
      showModal: true,
      index: index,
      name: this.state.allFav[index].name,
      img: this.state.allFav[index].img,
    })
  }
  render() {
    return (
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        <MyFavoritiesCard showFav={this.state.showFav} allFav={this.state.allFav} />
      </>
    )
  }
}

export default withAuth0(MyFavorites);

