import { storiesOf } from "@storybook/react";
import * as React from "react";
import { SpinLoader } from "./spinLoader";
storiesOf("SpinLoader", module)
  .addParameters({ component: SpinLoader })
  .add("default", () => (
    <SpinLoader />
  ));
