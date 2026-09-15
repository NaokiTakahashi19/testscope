// 表示評価用の仮基準。試験目的に応じた本番の閾値は未確定。
export const lowDiscrimination=(a:number)=>a<0.5;
export const highDifficulty=(b:number)=>b>=2;
export const reviewReasons=(item:{a:number;b:number})=>[lowDiscrimination(item.a)?'識別力が低い':null,highDifficulty(item.b)?'難易度が高い':null].filter(Boolean).join('・');
