export class Use_info{
    constructor(
        public user:{},
        public use_time: {},
        public use_count: {},
        public useage:{}
    ){}
}
export class Accident_info{
    constructor(
        public accident:{},
        public acc_time: {},
        public duration: {},
        public resolvent: {},
        public influence: {}
    ){}
}

export class Sample {
    constructor(
        public sample_info: {},
        public number: {},
        public repository: {},
        public type: {},
        public owner: {},
        public capacity: {},
        public collect_time: {},
        public branch : {},
        public lost_msg: {},
        public collect_count: {},
        public collector: {},
        public building: {},
        public ref: {},
        public shelf: {},
        public row: {},
        public col: {},
        public keeper: {},
        public pipe_Num: {},
        public store_time: {},
        public placer: {},
        public requirement: {},
        public emergency: {},
        public belong_rep: {},
        public blood_type?: {},
        public use_info?: Use_info[],
        public accident_info?: Accident_info[]
    ){}
}
