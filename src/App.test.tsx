import { render } from "@testing-library/react";
import Location from "../src/views/components/Location";
import { screen } from "@testing-library/react";
import store from "./redux/store";
import { Provider } from "react-redux";
import Header from "../src/views/components/Header";
import { MemoryRouter } from "react-router-dom";

describe("Location", () => {
  test("One Search Button", async () => {
    render(
      <Provider store={store}>
        <Location />
      </Provider>
    );
    const button = await screen.findAllByRole("button");
    expect(button).toHaveLength(1);
  });
});

describe("Header", () => {
  test("Title", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    const titleElement = screen.getByText("おすすめ料理");
    expect(titleElement).toBeInTheDocument();
  });
});
