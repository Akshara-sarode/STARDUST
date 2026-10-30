export function createAudio(){
  let enabled=false, ctx=null;
  function tone(freq=660,duration=.14,wave='sine',volume=.035,slide=0){
    if(!enabled)return;
    try{ctx ||= new (window.AudioContext||window.webkitAudioContext)(); if(ctx.state==='suspended')ctx.resume(); const osc=ctx.createOscillator(), gain=ctx.createGain(); osc.type=wave; osc.frequency.setValueAtTime(freq,ctx.currentTime); if(slide)osc.frequency.exponentialRampToValueAtTime(Math.max(40,freq+slide),ctx.currentTime+duration); gain.gain.setValueAtTime(.0001,ctx.currentTime); gain.gain.exponentialRampToValueAtTime(volume,ctx.currentTime+.025); gain.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+duration); osc.connect(gain).connect(ctx.destination); osc.start(); osc.stop(ctx.currentTime+duration+.02);}catch{}
  }
  return {toggle(){enabled=!enabled;return enabled}, get enabled(){return enabled}, play(kind){const sounds={sparkle:()=>tone(880,.12,'sine',.025,380),chime:()=>{tone(660,.2,'sine',.04,300);setTimeout(()=>tone(990,.24,'sine',.025,150),75)},whoosh:()=>tone(330,.45,'triangle',.04,560),pop:()=>tone(420,.11,'sine',.05,-170),paper:()=>tone(500,.18,'triangle',.022,160),success:()=>{tone(523,.32,'sine',.04,0);setTimeout(()=>tone(659,.35,'sine',.035,0),100);setTimeout(()=>tone(784,.55,'sine',.04,0),210)},crystal:()=>{tone(392,.5,'sine',.03,196);setTimeout(()=>tone(587,.65,'sine',.025,120),140)},transmission:()=>{tone(490,.35,'triangle',.025,140);setTimeout(()=>tone(740,.4,'sine',.025,0),210)}};sounds[kind]?.()}};
}
