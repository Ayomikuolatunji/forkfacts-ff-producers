import React from "react";

interface EmbedCodeGeneratorProps {
  name: string;
  description: string;
  url: string;
}

export const EmbedCodeGeneratorWidget = ({
  name,
  description,
  url,
}: EmbedCodeGeneratorProps) => {
  return (
    <div>
      <div>
        <div>{name}</div>
        <div>
          <img src="/Pantry.svg" alt={name} />
        </div>
        <div>{description}</div>
      </div>
      <div>
        <div>Embed this tool</div>
        <div>
          To embed this on your site, just copy and paste the code below:
        </div>
        <div>
          <textarea
            readOnly={true}
            style={{ height: "100px", width: "100%" }}
          />
        </div>
        <div>
          <button>Copy Embed Code</button>
        </div>
      </div>
    </div>
  );
};
