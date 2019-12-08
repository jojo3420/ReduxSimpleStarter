import { FETCH_WEATHER } from '../actions/index';


// !! 리덕스의 스테이트를 직접 변형 하지 않을 것!
// 기존의 객체나 배열을 변조 하지 말고 항상 새 것을 복사하여 사용 하는 컨셉!
export function reducerWeather(state = [], action) {
  // redux-promise middleware 가 promise 을 resolve 해줘
  // action.payload 에는 데이터가 있다.
  // console.log('action:', action);

  switch(action.type) {
    case FETCH_WEATHER:
      const { data } = action.payload;
      console.log('data: ', data);
      return [data, ...state];
      // return state.concat(data);

    default:
      return state;
  }


  return state;
}
