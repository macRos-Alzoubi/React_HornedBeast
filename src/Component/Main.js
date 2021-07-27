import React from 'react';
import HornedBeasts from './HornedBeast';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component{
    render(){
        return(
            <>
                <Container>
                    <Row xs={1} md={3} className='justify-content-center'>
                        {
                            this.props.beastList.map(bestObj => {
                                return <HornedBeasts 
                                            key={bestObj.title.toString()}
                                            imageUrl={bestObj.image_url}
                                            title={bestObj.title}
                                            description={bestObj.description}
                                            modalHandler={this.props.modalHandler}
                                        />
                            })
                        }
                    </Row>
                </Container>
            </>
        );
    }
}

export default Main;
