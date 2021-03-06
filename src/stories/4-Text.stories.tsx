import React from "react";
import { Paragraph, Box, Code } from "../index";
import { Link } from "../Text";

export default {
  title: "Text",
};

export const paragraph = () => (
  <Box>
    <Paragraph>
      Molestiae quis quis assumenda quidem. Quia recusandae qui quod vel. Cumque
      nostrum voluptate facilis ut temporibus nostrum ab occaecati.
    </Paragraph>
    <Paragraph>
      Recusandae quia et rerum non accusamus est omnis error. Ut tempore rem
      esse ut consequatur assumenda ducimus neque. Et vero facilis et nisi eos.
      Labore et corporis consectetur tenetur. Ut labore aut debitis.
    </Paragraph>
    <Paragraph>
      Deserunt similique nostrum quis nulla magni. Eum provident in eveniet
      possimus provident. Odio aut accusamus esse voluptates.
    </Paragraph>
    <Paragraph>
      Dignissimos laboriosam voluptatum veniam repudiandae. Soluta et ea
      exercitationem fugiat error omnis. Quidem eum et fuga quae. Sint rem illo
      quisquam iusto omnis sunt corrupti quia.
    </Paragraph>
    <Paragraph>
      Reprehenderit nihil qui qui voluptas ipsum cupiditate ab. Nisi qui
      consequatur laborum. Nam voluptate ea quisquam. Voluptate laborum esse
      exercitationem. Qui quo a adipisci perspiciatis.
    </Paragraph>
  </Box>
);

export const code = () => (
  <Paragraph>
    Some <Code>code</Code> here.
  </Paragraph>
);

export const link = () => (
  <Paragraph>
    A link to <Link href="http://example.com">example.com</Link> here.
  </Paragraph>
);
