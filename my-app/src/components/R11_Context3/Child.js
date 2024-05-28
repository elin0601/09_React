import React, { useState, useContext } from 'react';

/* 사용할 외부 Context 객체 import */
import UserContext from './UserContext';

/* 자식 컴포넌트 정의 */
const Child = () => {

    /* Context를 이용해 제공 받은 값 얻어오기 */

    // - Context로 전달 받은 객체
    // {"userList" : userList , "setUserList" : setUserList}

    // - 객체의 Key 값을 변수명과 똑같이 작성하여
    //   값이 알아서 대입 되도록 함
    const {userList, setUserList} =  useContext(UserContext);

    /* 자식 컴포넌트 상태 변수 선언 */
    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');

    /* 이벤트 핸들러 */
    // 추가 버튼 클릭 시 입력된 이름, 나이를 userList에 추가
    const addUser = () => {

        // 상태 변수 값을 이용해 user 객체 생성
        const user = {"name" : inputName, "age" : inputAge};

        // userList가 [{name : "a", age : 1}] 형태임을 가정

        // userList를 깊은 복사 + use 데이터 추가
        
        /* ... (전개 연산자, 나열연산자)  : 배열의 []를 벗겨 그냥 나열 상태로 보이게 하는 연산자 */
        const newUserList = [...userList, user];


        // 부모 상태 변수 userLsit를 변셩하는 함수를 이용해
        // newUserList를 세팅 -> 부모 컴포넌트 리랜더링 진행
        setUserList(newUserList);

        // userList.push(user) -> 이 방법 안됨!!

        // 자식 컴포넌트 상태 변수 값 초기화
        setInputName('');
        setInputAge('');
    }

    return(
        <div>
            <label htmlFor='id'>이름 : </label>
            <input type='text' id='id' onChange={ e => { setInputName(e.target.value) } } value={inputName}/>

            <br/>

            <label htmlFor='age'>나이 : </label>
            <input type='number' id='age' onChange={ e => { setInputAge(e.target.value) } } value={inputAge}/>

            <button onClick={addUser}>추가</button>
        </div>

    );


}

export default Child;
