"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5551:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=n(3117),o=(n(7294),n(3905));const i={sidebar_label:"compressible_agent",title:"agentchat.contrib.compressible_agent"},s=void 0,r={unversionedId:"reference/agentchat/contrib/compressible_agent",id:"reference/agentchat/contrib/compressible_agent",isDocsHomePage:!1,title:"agentchat.contrib.compressible_agent",description:"CompressibleAgent Objects",source:"@site/docs/reference/agentchat/contrib/compressible_agent.md",sourceDirName:"reference/agentchat/contrib",slug:"/reference/agentchat/contrib/compressible_agent",permalink:"/autogen/docs/reference/agentchat/contrib/compressible_agent",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/contrib/compressible_agent.md",tags:[],version:"current",frontMatter:{sidebar_label:"compressible_agent",title:"agentchat.contrib.compressible_agent"},sidebar:"referenceSideBar",previous:{title:"agent_builder",permalink:"/autogen/docs/reference/agentchat/contrib/agent_builder"},next:{title:"gpt_assistant_agent",permalink:"/autogen/docs/reference/agentchat/contrib/gpt_assistant_agent"}},l=[{value:"CompressibleAgent Objects",id:"compressibleagent-objects",children:[{value:"__init__",id:"__init__",children:[],level:4},{value:"generate_reply",id:"generate_reply",children:[],level:4},{value:"on_oai_token_limit",id:"on_oai_token_limit",children:[],level:4},{value:"compress_messages",id:"compress_messages",children:[],level:4}],level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"compressibleagent-objects"},"CompressibleAgent Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class CompressibleAgent(ConversableAgent)\n")),(0,o.kt)("p",null,"(Experimental) CompressibleAgent agent. While this agent retains all the default functionalities of the ",(0,o.kt)("inlineCode",{parentName:"p"},"AssistantAgent"),",\nit also provides the added feature of compression when activated through the ",(0,o.kt)("inlineCode",{parentName:"p"},"compress_config")," setting."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"compress_config")," is set to False by default, making this agent equivalent to the ",(0,o.kt)("inlineCode",{parentName:"p"},"AssistantAgent"),".\nThis agent does not work well in a GroupChat: The compressed messages will not be sent to all the agents in the group.\nThe default system message is the same as AssistantAgent.\n",(0,o.kt)("inlineCode",{parentName:"p"},"human_input_mode"),' is default to "NEVER"\nand ',(0,o.kt)("inlineCode",{parentName:"p"},"code_execution_config")," is default to False.\nThis agent doesn't execute code or function call by default."),(0,o.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(name: str,\n             system_message: Optional[str] = DEFAULT_SYSTEM_MESSAGE,\n             is_termination_msg: Optional[Callable[[Dict], bool]] = None,\n             max_consecutive_auto_reply: Optional[int] = None,\n             human_input_mode: Optional[str] = "NEVER",\n             function_map: Optional[Dict[str, Callable]] = None,\n             code_execution_config: Optional[Union[Dict, bool]] = False,\n             llm_config: Optional[Union[Dict, bool]] = None,\n             default_auto_reply: Optional[Union[str, Dict, None]] = "",\n             compress_config: Optional[Dict] = False)\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," ",(0,o.kt)("em",{parentName:"li"},"str")," - agent name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"system_message")," ",(0,o.kt)("em",{parentName:"li"},"str")," - system message for the ChatCompletion inference.\nPlease override this attribute if you want to reprogram the agent."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"llm_config")," ",(0,o.kt)("em",{parentName:"li"},"dict")," - llm inference configuration.\nPlease refer to ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/oai/client#create"},"OpenAIWrapper.create"),"\nfor available options."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"is_termination_msg")," ",(0,o.kt)("em",{parentName:"li"},"function"),' - a function that takes a message in the form of a dictionary\nand returns a boolean value indicating if this received message is a termination message.\nThe dict can contain the following keys: "content", "role", "name", "function_call".'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_consecutive_auto_reply")," ",(0,o.kt)("em",{parentName:"li"},"int"),' - the maximum number of consecutive auto replies.\ndefault to None (no limit provided, class attribute MAX_CONSECUTIVE_AUTO_REPLY will be used as the limit in this case).\nThe limit only plays a role when human_input_mode is not "ALWAYS".'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"compress_config")," ",(0,o.kt)("em",{parentName:"li"},"dict or True/False")," - config for compression before oai_reply. Default to False.\nYou should contain the following keys:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'"mode" (Optional, str, default to "TERMINATE"): Choose from ','["COMPRESS", "TERMINATE", "CUSTOMIZED"]',"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"TERMINATE"')," - terminate the conversation ONLY when token count exceeds the max limit of current model.\n",(0,o.kt)("inlineCode",{parentName:"li"},"trigger_count")," is NOT used in this mode."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"COMPRESS"')," - compress the messages when the token count exceeds the limit."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"CUSTOMIZED"')," - pass in a customized function to compress the messages.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'"compress_function" (Optional, callable, default to None): Must be provided when mode is "CUSTOMIZED".\nThe function should takes a list of messages and returns a tuple of (is_compress_success: bool, compressed_messages: List',"[Dict]",")."),(0,o.kt)("li",{parentName:"ul"},'"trigger_count" (Optional, float, int, default to 0.7): the threshold to trigger compression.\nIf a float between (0, 1], it is the percentage of token used. if a int, it is the number of tokens used.'),(0,o.kt)("li",{parentName:"ul"},'"async" (Optional, bool, default to False): whether to compress asynchronously.'),(0,o.kt)("li",{parentName:"ul"},'"broadcast" (Optional, bool, default to True): whether to update the compressed message history to sender.'),(0,o.kt)("li",{parentName:"ul"},'"verbose" (Optional, bool, default to False): Whether to print the content before and after compression. Used when mode="COMPRESS".'),(0,o.kt)("li",{parentName:"ul"},'"leave_last_n" (Optional, int, default to 0): If provided, the last n messages will not be compressed. Used when mode="COMPRESS".'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"**kwargs")," ",(0,o.kt)("em",{parentName:"li"},"dict")," - Please refer to other kwargs in\n",(0,o.kt)("a",{parentName:"li",href:"../conversable_agent#__init__"},"ConversableAgent"),".")),(0,o.kt)("h4",{id:"generate_reply"},"generate","_","reply"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def generate_reply(\n        messages: Optional[List[Dict]] = None,\n        sender: Optional[Agent] = None,\n        exclude: Optional[List[Callable]] = None) -> Union[str, Dict, None]\n")),(0,o.kt)("p",null,"Adding to line 202:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    if messages is not None and messages != self._oai_messages[sender]:\n        messages = self._oai_messages[sender]\n")),(0,o.kt)("h4",{id:"on_oai_token_limit"},"on","_","oai","_","token","_","limit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def on_oai_token_limit(\n        messages: Optional[List[Dict]] = None,\n        sender: Optional[Agent] = None,\n        config: Optional[Any] = None) -> Tuple[bool, Union[str, Dict, None]]\n")),(0,o.kt)("p",null,"(Experimental) Compress previous messages when a threshold of tokens is reached."),(0,o.kt)("p",null,"TODO: async compress\nTODO: maintain a list for old oai messages (messages before compression)"),(0,o.kt)("h4",{id:"compress_messages"},"compress","_","messages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def compress_messages(\n        messages: Optional[List[Dict]] = None,\n        config: Optional[Any] = None\n) -> Tuple[bool, Union[str, Dict, None, List]]\n")),(0,o.kt)("p",null,"Compress a list of messages into one message."),(0,o.kt)("p",null,"The first message (the initial prompt) will not be compressed.\nThe rest of the messages will be compressed into one message, the model is asked to distinguish the role of each message: USER, ASSISTANT, FUNCTION_CALL, FUNCTION_RETURN.\nCheck out the compress_sys_msg."),(0,o.kt)("p",null,"TODO: model used in compression agent is different from assistant agent: For example, if original model used by is gpt-4; we start compressing at 70% of usage, 70% of 8092 = 5664; and we use gpt 3.5 here max_toke = 4096, it will raise error. choosinng model automatically?"))}p.isMDXComponent=!0}}]);