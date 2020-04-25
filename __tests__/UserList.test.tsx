import React from "react";
import { render } from "react-native-testing-library";
import UsersList from "../src/components/UserList";

describe("UserList", () => {
  it("should render a single user on listview", async () => {
    const props = {
      navigationfn: (): void => {},
      users: [{ id: "1", name: "Bob", username: "Bob" }]
    };

    const component = render(
      <UsersList navigationfn={props.navigationfn} users={props.users} />
    );

    expect(component.getByText("Bob: @Bob")).toBeDefined();
  });
});
