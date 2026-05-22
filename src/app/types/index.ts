  export interface ExplainRequest{
    code:string;
}

export interface ExplainResponse{
    explanation:string;
}

  export interface DebugRequest{
    code:string;
    error:string;
}

export interface DebugResponse{
    debugging:string;
}
  export interface GenerateRequest{
    Language?:string;
    description:string;
}

export interface GenerateResponse{
    code:string;
}
  export interface Tab {
    id:"explain"|"debug"|"generate";
    label:string;
    icon:string;
    gradient:string;
}

export interface Feature {
    titel:string;
    description:string;
    icon:string;
}

export interface HistoryItem{
    id:number;
    type:"explain" | "debug" | "generate";
    timestamp: string;
    input:string;
    output:string;
}

