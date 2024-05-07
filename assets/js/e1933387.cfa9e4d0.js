"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[751],{7386:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=s(85893),t=s(11151);const i={sidebar_label:"agent",title:"agentchat.agent"},a=void 0,l={id:"reference/agentchat/agent",title:"agentchat.agent",description:"Agent",source:"@site/docs/reference/agentchat/agent.md",sourceDirName:"reference/agentchat",slug:"/reference/agentchat/agent",permalink:"/autogen/docs/reference/agentchat/agent",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/agent.md",tags:[],version:"current",frontMatter:{sidebar_label:"agent",title:"agentchat.agent"},sidebar:"referenceSideBar",previous:{title:"web_surfer",permalink:"/autogen/docs/reference/agentchat/contrib/web_surfer"},next:{title:"assistant_agent",permalink:"/autogen/docs/reference/agentchat/assistant_agent"}},c={},d=[{value:"Agent",id:"agent",level:2},{value:"name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"send",id:"send",level:3},{value:"a_send",id:"a_send",level:3},{value:"receive",id:"receive",level:3},{value:"a_receive",id:"a_receive",level:3},{value:"generate_reply",id:"generate_reply",level:3},{value:"a_generate_reply",id:"a_generate_reply",level:3},{value:"LLMAgent",id:"llmagent",level:2},{value:"system_message",id:"system_message",level:3},{value:"update_system_message",id:"update_system_message",level:3}];function o(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"agent",children:"Agent"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"@runtime_checkable\nclass Agent(Protocol)\n"})}),"\n",(0,r.jsx)(n.p,{children:"(In preview) A protocol for Agent."}),"\n",(0,r.jsxs)(n.p,{children:["An agent can communicate with other agents and perform actions.\nDifferent agents can differ in what actions they perform in the ",(0,r.jsx)(n.code,{children:"receive"})," method."]}),"\n",(0,r.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"@property\ndef name() -> str\n"})}),"\n",(0,r.jsx)(n.p,{children:"The name of the agent."}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"@property\ndef description() -> str\n"})}),"\n",(0,r.jsx)(n.p,{children:"The description of the agent. Used for the agent's introduction in\na group chat setting."}),"\n",(0,r.jsx)(n.h3,{id:"send",children:"send"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'def send(message: Union[Dict[str, Any], str],\n         recipient: "Agent",\n         request_reply: Optional[bool] = None) -> None\n'})}),"\n",(0,r.jsx)(n.p,{children:"Send a message to another agent."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"message"})," ",(0,r.jsx)(n.em,{children:"dict or str"})," - the message to send. If a dict, it should be\na JSON-serializable and follows the OpenAI's ChatCompletion schema."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"recipient"})," ",(0,r.jsx)(n.em,{children:"Agent"})," - the recipient of the message."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"request_reply"})," ",(0,r.jsx)(n.em,{children:"bool"})," - whether to request a reply from the recipient."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"a_send",children:"a_send"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'async def a_send(message: Union[Dict[str, Any], str],\n                 recipient: "Agent",\n                 request_reply: Optional[bool] = None) -> None\n'})}),"\n",(0,r.jsx)(n.p,{children:"(Async) Send a message to another agent."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"message"})," ",(0,r.jsx)(n.em,{children:"dict or str"})," - the message to send. If a dict, it should be\na JSON-serializable and follows the OpenAI's ChatCompletion schema."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"recipient"})," ",(0,r.jsx)(n.em,{children:"Agent"})," - the recipient of the message."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"request_reply"})," ",(0,r.jsx)(n.em,{children:"bool"})," - whether to request a reply from the recipient."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"receive",children:"receive"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'def receive(message: Union[Dict[str, Any], str],\n            sender: "Agent",\n            request_reply: Optional[bool] = None) -> None\n'})}),"\n",(0,r.jsx)(n.p,{children:"Receive a message from another agent."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"message"})," ",(0,r.jsx)(n.em,{children:"dict or str"})," - the message received. If a dict, it should be\na JSON-serializable and follows the OpenAI's ChatCompletion schema."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sender"})," ",(0,r.jsx)(n.em,{children:"Agent"})," - the sender of the message."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"request_reply"})," ",(0,r.jsx)(n.em,{children:"bool"})," - whether the sender requests a reply."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"a_receive",children:"a_receive"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'async def a_receive(message: Union[Dict[str, Any], str],\n                    sender: "Agent",\n                    request_reply: Optional[bool] = None) -> None\n'})}),"\n",(0,r.jsx)(n.p,{children:"(Async) Receive a message from another agent."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"message"})," ",(0,r.jsx)(n.em,{children:"dict or str"})," - the message received. If a dict, it should be\na JSON-serializable and follows the OpenAI's ChatCompletion schema."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sender"})," ",(0,r.jsx)(n.em,{children:"Agent"})," - the sender of the message."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"request_reply"})," ",(0,r.jsx)(n.em,{children:"bool"})," - whether the sender requests a reply."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"generate_reply",children:"generate_reply"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'def generate_reply(messages: Optional[List[Dict[str, Any]]] = None,\n                   sender: Optional["Agent"] = None,\n                   **kwargs: Any) -> Union[str, Dict[str, Any], None]\n'})}),"\n",(0,r.jsx)(n.p,{children:"Generate a reply based on the received messages."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"messages"})," ",(0,r.jsx)(n.em,{children:"list[dict]"})," - a list of messages received from other agents.\nThe messages are dictionaries that are JSON-serializable and\nfollows the OpenAI's ChatCompletion schema."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sender"})," - sender of an Agent instance."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,r.jsx)(n.p,{children:"str or dict or None: the generated reply. If None, no reply is generated."}),"\n",(0,r.jsx)(n.h3,{id:"a_generate_reply",children:"a_generate_reply"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'async def a_generate_reply(messages: Optional[List[Dict[str, Any]]] = None,\n                           sender: Optional["Agent"] = None,\n                           **kwargs: Any) -> Union[str, Dict[str, Any], None]\n'})}),"\n",(0,r.jsx)(n.p,{children:"(Async) Generate a reply based on the received messages."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"messages"})," ",(0,r.jsx)(n.em,{children:"list[dict]"})," - a list of messages received from other agents.\nThe messages are dictionaries that are JSON-serializable and\nfollows the OpenAI's ChatCompletion schema."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sender"})," - sender of an Agent instance."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,r.jsx)(n.p,{children:"str or dict or None: the generated reply. If None, no reply is generated."}),"\n",(0,r.jsx)(n.h2,{id:"llmagent",children:"LLMAgent"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"@runtime_checkable\nclass LLMAgent(Agent, Protocol)\n"})}),"\n",(0,r.jsx)(n.p,{children:"(In preview) A protocol for an LLM agent."}),"\n",(0,r.jsx)(n.h3,{id:"system_message",children:"system_message"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"@property\ndef system_message() -> str\n"})}),"\n",(0,r.jsx)(n.p,{children:"The system message of this agent."}),"\n",(0,r.jsx)(n.h3,{id:"update_system_message",children:"update_system_message"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def update_system_message(system_message: str) -> None\n"})}),"\n",(0,r.jsx)(n.p,{children:"Update this agent's system message."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"system_message"})," ",(0,r.jsx)(n.em,{children:"str"})," - system message for inference."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>a});var r=s(67294);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);