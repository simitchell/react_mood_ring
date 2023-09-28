import { useState } from 'react';
import styled from 'styled-components';

const OuterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    border: 2px solid;
    color: blue;

    h2 {
        width: 100%;
    }

    .happy {
        background-color: green;
    }

    .sad {
        background-color: grey;
    }

    .mehhh {
        background-color: black;
        color: whitesmoke;
    }
`;

const MyForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    padding: 16px;

    fieldset {
        display: flex;
        flex-wrap: no-wrap;
    }

    label,
    input {
        width: 100%;
    }
    label {
        margin: 4px 0;
    }
    button {
        background-color: red;
        height: 60px;
        width: 150px;
    }
`

export const MoodRing = () => {
    const [mood, setMood] = useState('happy');
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setMood(value);
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <OuterWrapper>
            <h2>Hello from MoodRing Component</h2>
            <MyForm onSubmit={handleSubmit}>
                <fieldset>
                    <legend>How are you feeling in your moods?</legend>
                    <label>Happy
                        <input type='radio' name='myMood' value='happy' onChange={handleChange} />
                    </label>
                    <label>Sad
                        <input type='radio' name='myMood' value='sad' onChange={handleChange} />
                    </label>
                    <label>Mehhh
                        <input type='radio' name='myMood' value='mehhh' onChange={handleChange} />
                    </label>
                </fieldset>
                <button type='submit'>Set Mood Here</button>
            </MyForm>
            <p className={mood}>{mood}</p>
        </OuterWrapper>
    );
};