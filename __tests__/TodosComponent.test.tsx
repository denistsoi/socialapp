import React from "react";
import { render } from "react-native-testing-library";
import Todos from "../src/components/Todos/TodosComponent";

describe("Todos Component", () => {
  it.only("should render single data in todos", async () => {
    let props: any;

    props = {
      onPress: jest.fn(),
      todos: [
        {
          id: 1,
          userId: 1,
          title: "Buy Groceries",
          completed: false
        }
      ]
    };

    const component = render(<Todos todos={props.todos} />);

    expect(component.toJSON()).toMatchSnapshot();
    expect(component.getByText("Buy Groceries")).toBeDefined();
  });
});
