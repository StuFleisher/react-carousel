import { render } from "@testing-library/react";
import Card from "./Card";
import { TEST_CARD } from "./_testCommon";

describe("tests Card component", function () {
  test("Renders without crashing", function () {
    render(<Card
      caption={TEST_CARD.caption}
      src={TEST_CARD.src}
      currNum={TEST_CARD.currNum}
      totalNum={TEST_CARD.totalNum} />);
  });

  test("matches snapshot", function () {
    const { container } = render(<Card
      caption={TEST_CARD.caption}
      src={TEST_CARD.src}
      currNum={TEST_CARD.currNum}
      totalNum={TEST_CARD.totalNum} />);

    expect(container).toMatchSnapshot();
  });

});