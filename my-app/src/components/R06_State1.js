import React, { useState } from 'react'; // imrs : 자동생성

// State : 컴포넌트의 상태 관리(전역변수)

// useState() 함수
// - 컴포넌트의 상태(State) 값이 변하게 될 경우
//   해당 컴포넌트를 다시 렌더링(ReRendering) 하는 함수

const StateEx1 = () => {
    
    // test : 컴포넌트의 전역 변수(State) 선언

    // setTest : test 값을 변경하기 위한 함수

    // useState('A') : 
    // - test가 변경을 감지할 State라고 인식
    //   + test 변수의 초기값으로 'A' 대입

    // - test 값을 변경할 수 있는 함수(setTest())를 등록

    const [test, setTest] = useState('A');

    // 버튼 클릭 시 동작할 함수(이벤트 핸들러)
    const changeFn = () => {
        if(test === 'A') setTest('B');
        else setTest('A');
    }

    return(
        <>
            <h1>{test}</h1>

            {/* onClick : 클릭이 되었을 때를 감지하는 이벤트 리스너 */}
            <button onClick={changeFn}>Change!</button>
        </>
    );
}

export default StateEx1;