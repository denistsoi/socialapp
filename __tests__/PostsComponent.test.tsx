import React from "react";
import { render } from "react-native-testing-library";
import Posts from "../src/components/Posts/PostsComponent";

describe("Posts Component", () => {
  it("should render single data in Posts", async () => {
    let props: any;

    props = {
      onPress: jest.fn(),
      posts: [
        {
          id: 1,
          userId: 1,
          title: "Bob cat",
          body: "I am your number #1 fan Bob!"
        }
      ]
    };

    const component = render(
      <Posts onPress={props.onPress} posts={props.posts} />
    );

    expect(component.toJSON()).toMatchSnapshot();
    expect(component.getByText("Bob cat")).toBeDefined();
    expect(component.getByText("I am your number #1 fan Bob!")).toBeDefined();
  });
});
