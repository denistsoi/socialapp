import React from "react";
import { render } from "react-native-testing-library";
import Albums from "../src/components/Albums/AlbumsComponent";

describe("Albums Component", () => {
  it.only("should render data in albums", async () => {
    let props: any;

    props = {
      onPress: jest.fn(),
      albums: [
        {
          id: 1,
          userId: 1,
          title: "Bob and the Bobsleigh"
        }
      ]
    };

    const component = render(
      <Albums onPress={props.onPress} albums={props.albums} />
    );

    expect(component.toJSON()).toMatchSnapshot();
    expect(component.getByText("Bob and the Bobsleigh")).toBeDefined();
  });
});
