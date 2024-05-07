import React from 'react';
import Form from 'react-bootstrap/Form';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ color, id, onChange }) => {

    const [localColor, setColor] = React.useState(color);
    const [displayColorPicker, setDisplayColorPicker] = React.useState(false);

    const handleChange = (e) => {
        console.log('handleChange colorField', e.hex);
        setColor(e.hex);
        const event = {
            target: {
                id: id,
                value: e.hex,
                type: 'color',
                persist: () => { }
            }
        };
        onChange(event);
    }

    const style = {
        backgroundColor: localColor,
        paddingLeft: '5px',
        border: '1px solid black',
        borderRadius: '150px',
        height: '30px',
        width: '70px'
    };

    const onClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    }

    return (
        <div>
            <Form.Control type='text'
                title='Click to select a color'
                onChange={handleChange}
                value={localColor}
                onClick={onClick}
                style={style} />

            {displayColorPicker && <SketchPicker
                color={localColor}
                onChange={handleChange} />
            }
        </div>
    );
};

export default ColorPicker;