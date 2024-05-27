import React, { useState } from 'react';

/* 자식 컴포넌트 */

// props == {handler : fn} 형태의 객체
const ChildId = (props) => {
    // const handler = props.handler;
    // == const {handler} = props;
    const {handler} = props;

    console.log(handler); // handler 확인
    return(
        <div className='wrapper'>
            {/* htmlFor == for 속성
                js 구문이다 보니 for는 반복문으로 해석될 수 있어서 
                이름을 다르게 함 */}
            <label htmlFor="inputId">ID</label>
            <input type="text" id="inputId" onChange={handler}/>
            {/* input의 값이 바뀌었을 때
                부모로 부터 전달 받은 함수 handler를 수행 
                자식 쪽에서 이벤트 발생!!
            */}
        </div>
    );
}

// props == {handler : fn} 의 Key 값과 동일한 합수 호출
const ChildPw = ({handler}) => {
    return(
        <div className='wrapper'>
            {/* htmlFor == for 속성
                js 구문이다 보니 for는 반복문으로 해석될 수 있어서 
                이름을 다르게 함 */}
            <label htmlFor="inputPw">PW</label>
            <input type="password" id="inputPw" onChange={handler}/>
        </div>
    );
}

const ChildTest = (props) => {
    return(
        <div>
            <button onClick={ () => { props.handler("BBB") } }>변경하기</button>
        </div>
    );

    // 부모로부터 test와 handler를 전달 받음
}

/* 부모 컴포넌트 */
const ParentComponent = () => {

    // 상태 변수 선언(State, useState)
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    // 이벤트 : 동작, 행위
    // 이벤트 리스너 : 동작(이벤트) 감지
    // 이벤트 핸들러 : 이벤트가 감지 되었을 때 수행할 함수

    // 이벤트 핸들러 정의
    const idHandler = e => { setId(e.target.value) }

    const pwHandler = e => { setPw(e.target.value) }

    const [test, setTest] = useState('A');
    const testFn = (str) => {
        setTest(str);
    }

    return(
        <>
            {/* props를 이용해
                이벤트 핸들러용 함수를
                자식 컴포넌트에게 전달
            */}
            <ChildId handler={idHandler}/>
            <ChildPw handler={pwHandler}/>

            <div className="wrapper">
                {/* id, pw가 입력되지 않으면 버튼 비활성화 */}
                <button disabled={id.length === 0 || pw.length === 0}>Login</button>
            </div>
            
            <h2>test 값 : {test}</h2>
            <ChildTest handler={testFn}/>
        </>
    );
    
}

export default ParentComponent;