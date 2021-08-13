import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import HamburgerIcon from "./HamburgerIcon";

storiesOf("Atoms/HamburgerIcon", module)
    .addParameters({ component: HamburgerIcon })
    .add("with props", () => (
        <HamburgerIcon
            color={text("icon color", "#000")}
            size={text("icon size", "1em")}
            clickHandler={action("clicked")}
        />
    ),
  );
