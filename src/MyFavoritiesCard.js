import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';


class MyFavoritiesCard extends Component {
    render() {
        return (
            <div>
                {this.props.showFav && this.props.allFav.map(item => {
                    return (
                        <Card style={{ width: '18rem', display: 'inline-block' }}>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                    {item.name}
                                </Card.Text>
                                <Button variant="primary" onClick={() => { this.props.addFavItem(item) }}>delete</Button>
                                <Button variant="primary" onClick={() => { this.props.addFavItem(item) }}>update</Button>
                            </Card.Body>
                        </Card>
                    )
                })}

            </div>
        )
    }
}

export default MyFavoritiesCard
