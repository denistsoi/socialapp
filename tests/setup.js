require("jest-fetch-mock").enableFetchMocks();
require("jest-fetch-mock").enableMocks();

jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

jest.mock("react-native-vector-icons/MaterialIcons", () => {
  const React = require("react");

  return class extends React.Component {
    render() {
      return "Icon";
    }
  };
  //   createIconSet: () => {
  //     const Icon = class extends React.Component {
  //       render() {
  //         return jest.fn();
  //       }
  //     };

  //     return Icon;
  //   }
  // };
});

global.AbortController = jest.fn();
