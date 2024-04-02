interface IAgents {
  "ct:adminState": string[];
  "ct:adminStateInGroup": string[];
  "ct:agentState": string[];
  "ct:agentStateDuration": string[];
  "ct:callDirection": string[];
  "ct:callState": string[];
  "ct:callStateDuration": string[];
  "ct:cdpn": string[];
  "ct:cgpn": string[];
  "ct:distributedCallCount": string[];
  "ct:firstName": string[];
  "ct:id": string[];
  "ct:ip": string[];
  "ct:lastName": string[];
  "ct:lockCause": string[];
  "ct:login": string[];
  "ct:noAnswerCallCount": string[];
  "ct:regionId": string[];
  "ct:regionName": string[];
  "ct:secondName": string[];
  "ct:skillLevel": string[];
  "ct:type": string[];
}

export interface IData {
  goup_id: string;
  title: string;
  queue: string | number;
  online: number;
  in_job: number;
  locked: number;
  free: number;
  blockAgenst: [IAgents];
  busyAgents: [IAgents];
  freeAgents: [IAgents];
}
