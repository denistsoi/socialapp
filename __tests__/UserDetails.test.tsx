import React from "react";
import { render } from "react-native-testing-library";
import UserDetailsComponent from "../src/components/UserDetails/UserDetailsComponent";

describe("UserDetails", () => {
  it("should render a single user address details in UserDetailsComponent", async () => {
    let props: any;

    props = {
      navigation: {
        navigate: jest.fn()
      },
      ...props,
      user: {
        id: "1",
        name: "Bob",
        username: "Bob",
        address: {
          suite: "1/F",
          street: "101 Avenue"
        }
      }
    };

    const component = render(
      <UserDetailsComponent navigation={props.navigation} user={props.user} />
    );

    expect(component.toJSON()).toMatchSnapshot();
    expect(component.getByText("1/F 101 Avenue")).toBeDefined();
  });
});
