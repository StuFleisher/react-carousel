import {render} from "@testing-library/react";
import Card from "./Card";
import {TEST_CARD} from "./_testCommon";


test("Renders without crashing", function(){
  render(<Card
    caption={TEST_CARD.caption}
    src={TEST_CARD.src}
    currNum={TEST_CARD.currNum}
    totalNum={TEST_CARD.totalNum} />)
})