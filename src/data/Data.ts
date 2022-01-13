import { pageLocationType, dataAreaType, IDataLayout } from "./Types";

export const navigationLocations: Record<pageLocationType, string> = {
  welcome: "🏠",
  personal: "👩",
  github: "💻",
  xing: "🔗",
};

export const welcomeTexts: Record<pageLocationType, string[]> = {
  welcome: ["Hi. Welcome to this landingpage."],
  personal: ["More Information"],
  github: ["GitHub"],
  xing: ["Xing"],
};

export const welcomeSubTexts: Record<pageLocationType, string[]> = {
  welcome: ["Have a look around or feel free to just feed the rabbit."],
  personal: ["This way for more information."],
  github: ["This way for more projects on GitHub."],
  xing: ["This way for making contact on Xing."],
};

export const externalLinks: Record<pageLocationType, URL | null> = {
  welcome: null,
  personal: null,
  github: new URL("https://github.com/L2a6u1r1a/"),
  xing: new URL("https://github.com/L2a6u1r1a/"),
};

export const plantIcons = ["🌾", "🌱", "🌿", "🍀"];

export const dataContents: Record<dataAreaType, IDataLayout> = {
  experience: {
    dataLayoutType: "block",
    dataRecords: [
      { dataType: "headline", value: "Professional background and experience" },
      {
        dataType: "subheadline",
        value:
          "This could be more information on professional background and experience",
      },
      {
        dataType: "text",
        value:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      },
      {
        dataType: "text",
        value:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      },
      {
        dataType: "text",
        value:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      },
    ],
  },
  tech: {
    dataLayoutType: "grid",
    dataRecords: [
      { dataType: "headline", value: "Capabilities" },
      {
        dataType: "text",
        value: "This could be more information on capabilities.",
      },
      {
        dataType: "block",
        value: [
          { dataType: "subheadline", value: "Programming Languages" },
          {
            dataType: "text",
            value: "javascript, typescript, nodejs, react, java",
          },
        ],
      },
      {
        dataType: "block",
        value: [
          { dataType: "subheadline", value: "Database Technologies" },
          {
            dataType: "text",
            value: "mongodb, apachekafka, redis elasticsearch, mysql",
          },
        ],
      },
      {
        dataType: "block",
        value: [
          { dataType: "subheadline", value: "Additional Technologies" },
          {
            dataType: "text",
            value: "scrum, kanban, rest, websockets, mobx, graphql, git",
          },
        ],
      },
      {
        dataType: "block",
        value: [
          { dataType: "subheadline", value: "Additional Capabilites" },
          {
            dataType: "text",
            value: "productowner, architecture, teamcaptain",
          },
        ],
      },
      {
        dataType: "block",
        value: [
          { dataType: "subheadline", value: "Languages" },
          {
            dataType: "text",
            value: "german, english, french",
          },
        ],
      },
    ],
  },
  example: {
    dataLayoutType: "block",
    dataRecords: [
      { dataType: "headline", value: "Example Projects" },
      {
        dataType: "subheadline",
        value: "Development of this page",
      },
      {
        dataType: "text",
        value:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
      },
      {
        dataType: "subheadline",
        value: "Another Project",
      },
      {
        dataType: "text",
        value:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
      },
      {
        dataType: "subheadline",
        value: "Another Project",
      },
      {
        dataType: "text",
        value:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
      },
    ],
  },
};
