import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
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

    sendDataToModal = () => {
        this.props.modalHandler(this.props.title, this.props.imageUrl, this.props.description, true);
    }

    render(){
        return(
            <>
                <Col>
                    <Card 
                        style={{ width: '18rem', height: '23rem' , marginBottom: '1.5rem'}}
                        onClick={this.votesHandler}
                        >
                        <Card.Img 
                            style={{width: '100%', height: '50%'}}
                            onClick={this.sendDataToModal}
                            variant="top" 
                            src={this.props.imageUrl} 
                        />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Footer>
                                <Card.Text>❤ {this.state.numberOfVotes}</Card.Text>
                                <Card.Text>{this.props.description}</Card.Text>
                            </Card.Footer>
                        </Card.Body>
                    </Card>      
                </Col>        
            </>
        );
    }
}

export default HornedBeasts;
