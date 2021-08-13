import { text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { CircleLoader } from "./CircleLoader";
storiesOf("Atoms/CircleLoader", module)
.addParameters({ docs: null })
    .add("default", () => (
        <CircleLoader
            showMask={boolean("show loader mask", true)}
            fontSize={text("loader size", "1em")}
        />
    ),
  )
  .add("enlarged loader", () => (
    <CircleLoader
        showMask={boolean("show loader mask", false)}
        enlargeLoader={boolean("enlarge loader flag", true)}
    />
  ));
