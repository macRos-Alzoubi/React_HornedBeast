import React from 'react';
import HornedBeasts from './HornedBeast';
import Beasts from './Beasts.json';
import './component.css';

class Main extends React.Component{
    render(){
        return(
            <>
                <div className='card-container'>
                    {
                        Beasts.map(bestObj => {
                            return <HornedBeasts 
                                        imageUrl={bestObj.image_url}
                                        title={bestObj.title}
                                        description={bestObj.description}
                                    />
                        })
                    }
                </div>
            </>
        );
    }
}

export default Main;
