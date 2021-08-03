import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';


class AllDataAPICard extends Component {
    render() {
        return (
            <div>
                {this.props.showData && this.props.allData.map(item => {
                    return (
                        <Card style={{ width: '18rem' , display:'inline-block' }}>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                {item.name}                              
                                  </Card.Text>
                                <Button variant="primary" onClick={()=>{this.props.addFavItem(item)}}>Add to fav</Button>
                            </Card.Body>
                        </Card>
                    )
                })}

            </div>
        )
    }
}

export default AllDataAPICard
