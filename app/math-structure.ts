// 枝問のない小問、または枝問を採点単位とする。親小問は重複計上しない。
const layout=[ [0,0,0,0,0,0], [0,0,2], [5,5], [0,0,0,0], [0,0,0], [0,0,0] ];
export const mathStructure=layout.flatMap((subs,g)=>subs.flatMap((branches,s)=>Array.from({length:branches||1},(_,b)=>({major:g+1,minor:s+1,branch:branches?b+1:null,no:`${g+1}（${s+1}）${branches?['①','②','③','④','⑤'][b]:''}`}))));
