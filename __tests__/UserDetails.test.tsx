import React from "react";
import { render } from "react-native-testing-library";
import UserDetailsComponent from "../src/components/UserDetails/UserDetailsComponent";

describe("UserDetails", () => {
  it("should render a single user's details in UserDetailsComponent", async () => {
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
          suite: "101 Avenue"
        },
        albums: [
          {
            id: 1,
            userId: 1,
            title: "Bob and the Bobsleigh"
          }
        ],
        posts: [
          {
            id: 1,
            userId: 1,
            title: "Bob cat",
            body: "I am your number #1 fan Bob!"
          }
        ],
        todos: [
          {
            id: 1,
            userId: 1,
            title: "Buy Groceries",
            completed: false
          }
        ]
      }
    };

    const component = render(
      <UserDetailsComponent navigation={props.navigation} user={props.user} />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
