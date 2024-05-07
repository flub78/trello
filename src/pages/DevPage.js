import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { SketchPicker } from 'react-color';



const DevPage = () => {

    const [color, setColor] = React.useState('blue');
    const [displayColorPicker, setDisplayColorPicker] = React.useState(false);

    const onChange = (e) => {
        // console.log('onChange', e.target.value);
        console.log('onChange colorField', e.hex);
        setColor(e.hex);
    }

    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    }

    const style = {
        backgroundColor: color,
        paddingLeft: '5px',
        border: '1px solid black'
    };

    return (
        <div>
            <h1>Development page</h1>
            <br></br>
            <p>To experiment on React components and other javascript functions.</p>
            <Form className='d-flex justify-content-between align-items-center'>

                <div >

                    <Form.Control type='text'
                        title='Click to select a color'
                        id='colorField'
                        onChange={onChange}
                        value={''}
                        onClick={handleClick}
                        style={style} />
                    {displayColorPicker && <SketchPicker
                        color={color}
                        onChange={onChange} />
                    }
                    <div className="text-danger mt-0 mb-2"></div>
                </div>
            </Form>
        </div>
    );
};

export default DevPage;