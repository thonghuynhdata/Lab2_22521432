export interface AudioTask {trackUrl:string;controller:AbortController;resolve:(buffer:AudioBuffer)=>void;reject:(reason?:unknown)=>void}
export class AudioTaskQueue {
 private queue:AudioTask[]=[]; private isProcessing=false;private activeController:AbortController|null=null;private activeTask:AudioTask|null=null;private disposed=false;
 constructor(private context:AudioContext){}
 enqueue(trackUrl:string):Promise<AudioBuffer>{if(this.disposed)return Promise.reject(new Error('Queue has been disposed'));const controller=new AbortController();return new Promise((resolve,reject)=>{this.queue.push({trackUrl,controller,resolve,reject});void this.processNext()})}
 private async processNext():Promise<void>{if(this.isProcessing||this.disposed)return;this.isProcessing=true;try{while(this.queue.length&&!this.disposed){const task=this.queue.shift()!;this.activeTask=task;this.activeController=task.controller;try{const response=await fetch(task.trackUrl,{signal:task.controller.signal});if(!response.ok)throw new Error(`HTTP ${response.status}`);const bytes=await response.arrayBuffer();if(task.controller.signal.aborted)throw new DOMException('Aborted','AbortError');const buffer=await this.context.decodeAudioData(bytes);if(task.controller.signal.aborted)throw new DOMException('Aborted','AbortError');task.resolve(buffer)}catch(error){task.reject(error)}finally{this.activeTask=null;this.activeController=null}}}finally{this.isProcessing=false}}
 cancelAll(){this.activeController?.abort();for(const task of this.queue){task.controller.abort();task.reject(new DOMException('Aborted','AbortError'))}this.queue=[]}
 dispose(){this.disposed=true;this.cancelAll()}
}
