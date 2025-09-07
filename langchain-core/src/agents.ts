export type AgentAction = {
  tool: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toolInput: string | Record<string, any>;
  log: string;
  returnValues: Record<string, any>;
};

export type AgentFinish = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  returnValues: Record<string, any>;
  log: string;
};

export type AgentStep = {
  action: AgentAction;
  observation: string;
  returnValues: Record<string, any>;
};
