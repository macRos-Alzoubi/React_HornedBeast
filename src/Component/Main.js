import React from 'react';
import HornedBeasts from './HornedBeast';
import Beasts from './Beasts.json';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

class Main extends React.Component{
    render(){
        return(
            <>
                <Container>
                    <Row xs={1} md={3} className='justify-content-center align-items-center'>
                        {
                            Beasts.map(bestObj => {
                                return <HornedBeasts 
                                            key={bestObj.title.toString()}
                                            imageUrl={bestObj.image_url}
                                            title={bestObj.title}
                                            description={bestObj.description}
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
