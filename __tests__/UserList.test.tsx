import React from "react";
import { render } from "react-native-testing-library";
import UsersList from "../src/components/UserList/UserListComponent";

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

describe("UserList", () => {
  let props: any;

  it("should render a single user on listview", async () => {
    props = createTestProps({
      users: [{ id: "1", name: "Bob", username: "Bob" }]
    });

    const component = render(
      <UsersList navigation={props.navigation} users={props.users} />
    );

    expect(component.getByText("@Bob")).toBeDefined();
  });

  it("should render a two users on listview", async () => {
    props = createTestProps({
      users: [
        { id: "1", name: "Bob", username: "Bob" },
        {
          id: "2",
          name: "Alice",
          username: "coolio"
        }
      ]
    });

    const component = render(
      <UsersList navigation={props.navigation} users={props.users} />
    );

    expect(component.getByText("@Bob")).toBeDefined();
    expect(component.getByText("@coolio")).toBeDefined();
  });
});
