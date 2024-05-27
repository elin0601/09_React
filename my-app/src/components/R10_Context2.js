import React, { createContext, useContext, useState } from 'react';

/* 1. Context 객체 생성 */
const TestContext = createContext();

/* 4. 후손 컴포넌트 */
const GrandChild = () => {

    // TestContext에 제공된 값을 여기서 사용
    // {"number" : number, "setNumber" : setNumber}

    const {number, setNumber}  = useContext(TestContext);
    // -> number 변수 : Parent의 상태 변수
    // -> setNumber 변수 : Parent 상태 변수를 바꿀 수 있는 함수

    return (
        <>
            <h3>GrandChild Component</h3>

            <input type='number' value = {number} onChange={e => {setNumber(e.target.value)} }/>

            <h4>{number}</h4>
        </>
    );
}


/* 3. 자식 컴포넌트 */
const Child = () => {
    return (
        <>
            <h2>Child Component</h2>
            <GrandChild />
        </>
    );
}


/* 2. 부모 컴포넌트 */
const Parent = () => {

    // 상태 변수 선언
    const [number, setNumber] = useState(0);

    return (
        /* Context는 값을 1개만 제공할 수 있다!
           -> 여러 개 제공하고 싶으면 {}, [] 로 묶기
        */

        // 리액트에서 {number, setNumber} 작성하면 아래와 같이 변환됨
        // {"number" : number, "setNumber" : setNumber}
        <TestContext.Provider value={ {number, setNumber} }>

            <h1>
                Parent Component : 

                {/* Parent 컴포넌트의 상태값 출력 */}
                <span className='red'>{number}</span>
            </h1>

            <Child/>
        </TestContext.Provider>
    );
}

export default Parent;