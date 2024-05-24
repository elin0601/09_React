import React from 'react'

// props 예제 1 (함수형 컴포넌트)
/* 
 * @param {*} props : 부모 -> 자식 컴포넌트로 데이터 전달 시 사용하는 객체 
 */
const PropsEx1 = (props) =>{

    // 부모 컴포넌트로 부터 전달 받은 데이터 확인
    console.log('PropsEx1' , props);

    return(
        <>
            <h3>PropsEx1 확인</h3>

            {/* js 값/코드를 html 내부에 사용할 땐 {} 안에 작성 */}
            <ul>
                <li>번호 : {props.num}</li>
                <li>이름 : {props.name}</li>
                <li>나이 : {props.age}세</li>
                <li>점수 : {props.score}점</li>
            </ul>
        </>
    );
}

export default PropsEx1;