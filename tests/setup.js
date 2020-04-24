import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

require("jest-fetch-mock").enableFetchMocks();
jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");
