import './App.css'; /* CSS 얻어와 아래 작성된 컴포넌트에 적용 */


// import [여기서 사용할 이름] from [js 파일 경로]
import ClassComponent from './components/R01_ClassComponent';
// R01_ClassComponent.js에서 export한 컴포넌트를 가져오기(import)
//  -> 가져온 컴포넌트를 ClassComponent라고 부르겠다
//  -> 사용 시 작성법 : <ClassComponent/>

import FunctionComponent from './components/R02_FunctionComponent';


function App() {

  /* (중요!) 
    리액트 컴포넌트를 반환하는 함수는
    딱 한 개의 컴포넌트만 반환 가능!!!!!
    -> 여러 요소를 반환하고 싶을 땐 [묶어서] 반환!!!
  */
  return (
    /* fragment(<> </>) : 반환되는 요소(컴포넌트)를 묶는 용도, 해석 X */
    <>
      {/* ClassComponent를 현재 위치에 렌더링 */}
      <ClassComponent />

      <FunctionComponent />
    </>
  );
}

export default App;
