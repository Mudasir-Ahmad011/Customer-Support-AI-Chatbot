"use client"

import { Thread, useEdgeRuntime, AssistantModal } from "@assistant-ui/react";
 
export default function App(){
  const runtime = useEdgeRuntime({
    api: "/api/chat",
  });
 
  return (
    <div style={{height:"100vh"}}>
      {/* <AssistantModal runtime={runtime} /> */}
       <Thread runtime={runtime} /> 
    </div>
  );
};