import React, {Component} from 'react';


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='container'>
                <div className='jumbotron mt-5'>
                    <div className='col-sm-8 mx-auto'>
                        <h4 className='text-center'>Welcome</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;