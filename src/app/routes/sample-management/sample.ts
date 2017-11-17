export class Use_info{
    constructor(
        public user:string,
        public use_time: string,
        public use_count: number,
        public useage:string
    ){}
}
export class Accident_info{
    constructor(
        public accident:string,
        public acc_time: string,
        public duration: string,
        public resolvent: string,
        public influence: string
    ){}
}

export class Sample {
    constructor(
        public sample_info: string,
        public number: number,
        public repository: number,
        public type: number,
        public owner: number,
        public capacity: string,
        public collect_time: Date,
        public branch : number,
        public lost_msg: string,
        public collect_count: number,
        public collector: string,
        public building: string,
        public ref: number,
        public shelf: number,
        public row: number,
        public col: number,
        public keeper: string,
        public pipe_Num: number,
        public store_time: Date,
        public placer: string,
        public requirement: string,
        public emergency: string,
        public belong_rep: number,
        public blood_type?: number,
        public use_info?: Use_info[],
        public accident_info?: Accident_info[]
    ){}
}
