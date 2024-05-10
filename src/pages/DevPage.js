import React from 'react';
import Form from 'react-bootstrap/Form';

import Navbar from '../components/Navbar';
import ColorPicker from '../components/ColorPicker';
import ForeignKeySelector from '../components/ForeignKeySelector';


const DevPage = () => {

    const [color, setColor] = React.useState('blue');

    const onChange = (e) => {
        // console.log('onChange', e.target.value);
        console.log('onChange colorField', e.hex);
        // setColor(e.hex);
    }

    return (
        <div className="container">
            <Navbar theme="dark" />

            <h1>Development page</h1>
            <br></br>
            <p>To experiment on React components and other javascript functions.</p>
            <Form className='d-flex justify-content-between align-items-center'>
                <ColorPicker color={color} onChange={onChange} />

            </Form>
            <ForeignKeySelector api="/boards?lang=fr" keyId="name" />

        </div>
    );
};

export default DevPage;