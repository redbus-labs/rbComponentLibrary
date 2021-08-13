import { number, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { RadioOption } from "./radioOption";

storiesOf("Atoms/radioOption", module)
  .add("default", () => <RadioOption
    optionBackground={text("optionBackground", "option option_selected")}
    radioimage={<img src="/radio_btn_filled.svg" />}
    title={text("Title", "Donate to redBus Cares")}
    description={text("Description", "Help support families of Bus drivers and helpers")}
    itemId={number("itemID", 2)}
    selectedId={number("selectedId", 2)}
    onRadioClick={action("Radio Clicked")}
  />,
)
  .add("with props", () =>
  (
  <RadioOption
    optionBackground={text("optionBackground", "option option_selected")}
    radioimage={<img src="/radio_btn_filled.svg" />}
    title={text("Title", "Donate to redBus Cares")}
    description={text("Description", "Help support families of Bus drivers and helpers")}
    itemId={number("itemID", 2)}
    selectedId={number("selectedId", 2)}
    onRadioClick={action("Radio Clicked")}
  />
  ),
  );
