import React from "react";
import {SideContentContainer, SideContentTitle, SideContentBody} from "./style";

function SideContent({ title, children }) {
  return (
    <SideContentContainer>
      <SideContentTitle>{title}</SideContentTitle>
      <SideContentBody>
        {children}
      </SideContentBody>
    </SideContentContainer>
  );
}

export default SideContent;
