import { Component } from "react";

// 이렇게 따로 만들어서 하는 이유는 순수 자바스크립트에서만
// try {
//   someCodeWhichMightFail();
// } catch (err) {
//   //handle error
// }를 사용할 수 있는데 JSX코드는 순수자바스크립트가 아니므로 아래와 같이 만든 후
//JSX코드를 감싸준다.
// 하위 컴포넌트 중 하나가 오류를 만들거나 전달할 때 발동된다.
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  //componentDidCatch : class컴포넌트를 오류 경계로 만들게 된다.
  //오류 경계란 이런 생명주기 메소드를 갖는 컴포넌트를 지칭하는 용어이다.
  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
