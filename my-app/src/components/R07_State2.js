import React, { useState } from 'react';

const StateEx2 = (props) => {

    // props로 전달 받은 값 중
    // init 값을 count 초기 값으로 설장

    // setCount()를 이용해 count 값 변경
    // -> StateEx2 컴포넌트에서 변경된 부분만 리렌더링 진행
    const [count, setCount] = useState(Number(props.init));

    return(
        <div className='count-container'>
            <button onClick={() => { setCount(count - Number(props.step)) }}>-{props.step}</button>

            <h3>{count}</h3>

            <button onClick={() => { setCount(count + Number(props.step)) }}>+{props.step}</button>
        </div>
    );

}

export default StateEx2;