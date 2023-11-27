"use client";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookCustomChat = () => {
  return (
    <FacebookProvider appId="716748153348825" chatSupport>
      <CustomChat pageId="192715333915300" minimized={false} />
    </FacebookProvider>
  );
};

export default FacebookCustomChat;
