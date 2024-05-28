import React, {useState} from 'react';

/* 외부 Context 객체 import */
import UserContext from './UserContext';

/* 외부 자식 컴포넌트 import */
import Child from './Child';

/* 부모 컴포넌트 정의 */
const Parent = () => {

    /* 상태 변수 userList 선언 / 초기 값 == 빈 배열 */
    const [userList, setUserList] = useState([]);

    return(

        /* 하위 컴포넌트에게 
        {"userList" : userList , "setUserList" : setUserList}
          객체를 Context를 이용해 제공        
        */
        <UserContext.Provider value={ {userList, setUserList} }>

            {/* 하위 컴포넌트 호출 */}
            <Child/>

            <div>
                {/* Child에서 추가한 user 정보를 여기에 출력 */}

                {userList.map( (user, index) => {
                    return(

                        /* key 속성 : 배열 반복 출력 시 요소를 구분하는 key */
                        <ul key={index}>
                            <li>index : {index}</li>
                            <li>name : {user.name}</li>
                            <li>age : {user.age}</li>
                        </ul>
                    );
                })}

            </div>

        </UserContext.Provider>
    );

}

export default Parent;


// 배열.map( (요소, index) => {return 가공한 값;} )

// 배열의 각 요소의 값을 순서대로 하나씩 얻어와
// 가공한 후 return
// -> return 값들을 모아 새로운 배열을 최종적으로 반환