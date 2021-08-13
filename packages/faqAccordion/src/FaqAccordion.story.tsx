import { object, number, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { FaqAccordion } from "./FaqAccordion";
import { action } from "@storybook/addon-actions";

storiesOf("Atoms/FaqAccordion", module)
  .addParameters({ component: FaqAccordion })
  .add("with props", () => (
    <FaqAccordion
      index={number("index", 0)}
      handleChange={action("clicked")}
      data={object("content", [{
        name : "Which bus to board using Open Ticket?",
        msg : "You can travel in any of the scheduled buses of the participating Bus operators. Open Ticket will be valid till 11:59 PM on the Date of journey. There is no restriction on which bus to board and you have flexibility to travel at no extra cost and you are eligible to board any bus once you book Open ticket.After booking open ticket you will get to see a list of buses accepting open ticket and coming to your boarding point. You can board any bus from that list.",
        show : false,
      }])}
      autoid={text("data-autoid", "autoid")}
    />
  ))
  .add("with html", () => (
    <FaqAccordion
      index={number("index", 1)}
      handleChange={action("clicked")}
      data={object("content", {
        name : "Which bus to board using Open Ticket?",
        msgHtml: "Informasi pembatalan & Reschedule",
        show : true,
      })}
      autoid={text("data-autoid", "autoid")}
    />
  ));
