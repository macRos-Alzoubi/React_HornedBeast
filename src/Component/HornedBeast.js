import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class HornedBeasts extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            numberOfVotes : 0
        };
    }

    votesHandler = () =>{
        this.setState({
            numberOfVotes: this.state.numberOfVotes + 1
        })
    }


    render(){
        return(
            <>
                <Col>
                    <Card style={{ width: '18rem' }} className='card'>
                        <Card.Img onClick={this.votesHandler} variant="top" src={this.props.imageUrl} className='best-img'/>
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                            ❤ {this.state.numberOfVotes}
                            </Card.Text>
                            <Card.Footer>{this.props.description}</Card.Footer>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>      
                </Col>        
            </>
        );
    }
}

export default HornedBeasts;
