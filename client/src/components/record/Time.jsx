"use client";
import TimeInput from react-time-input;

const Time = () => {

    const onFocusHandler = (event) => {
        console.log("hello there you entered :  my name is ", event.target.name);
    }
 
    const onBlurHandler = (event) => {
        console.log("you left ");
    }
 
    const onTimeChangeHandler = (val) => {
        if (val.length === 5) {
            // do something with this value
        }
    }
 
    return (
        <TimeInput
            name="example"
            initTime='11:12'
            className='s-input -time'
            mountFocus='true'
            onTimeChange={onTimeChangeHandler}
            onFocusHandler={onFocusHandler}
            onBlurHandler={onBlurHandler}
        />
    );
 
 }
 
 function App() {
    return (
        <Time/>
    );
 
 }
 

