import React , { useState } from 'react'

const NumberPlusMinus = (props) => {

    const [count, setCount] = useState(Number(props.init));

    return(

        <div className='container'>
            <button className='minus' onClick={() => setCount(count-Number(props.step))}>-{props.step}</button>
            <h3>{count}</h3>
            <button className='plus' onClick={ () => setCount(count+Number(props.step)) }>+{props.step}</button>
        </div>

    );

}
export default NumberPlusMinus;