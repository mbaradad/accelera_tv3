var aNode = document.getElementsByClassName('F-infoPrograma')[0];
function set_speed(speed){
    var videoView = document.getElementsByClassName('videoviewbase')[0];
    var videoId = videoView.id.slice(14)
    var video = document.getElementById(videoId)
    var video_speed = video.getElementsByTagName('video')[0]
    var video = document.getElementById(videoId)
    var video_speed = video.getElementsByTagName('video')[0]
    alert(video_speed.playbackRate);
    video_speed.playbackRate=speed;
    alert(video_speed.playbackRate);
}

var html =  `
<script>
</script>
<div class="speed">
<input id="textInput" type="number" value="x = this.value; 

    var videoView = document.getElementsByClassName('videoviewbase')[0];
    var videoId = videoView.id.slice(14)
    var video = document.getElementById(videoId)
    var video_speed = video.getElementsByTagName('video')[0]
    var video = document.getElementById(videoId)
    var video_speed = video.getElementsByTagName('video')[0]
    video_speed.playbackRate=x;

document.getElementById('textInput').value = x; document.getElementById('slideBar').value = x; return x" onchange="x = this.value; 
    var videoView = document.getElementsByClassName('videoviewbase')[0];
    var videoId = videoView.id.slice(14)
    var video = document.getElementById(videoId)
    var video_speed = video.getElementsByTagName('video')[0]
    var video = document.getElementById(videoId)
    var video_speed = video.getElementsByTagName('video')[0]
    video_speed.playbackRate=x;

document.getElementById('textInput').value = x; document.getElementById('slideBar').value = x; return x" min=".25" max="4" step="0.1" style="max-width: 10%">
    
<input id="slideBar" type="range" value="x = this.value; 
    var videoView = document.getElementsByClassName('videoviewbase')[0];
    var videoId = videoView.id.slice(14)
    var video = document.getElementById(videoId)
    var video_speed = video.getElementsByTagName('video')[0]
    var video = document.getElementById(videoId)
    var video_speed = video.getElementsByTagName('video')[0]
    video_speed.playbackRate=x;
document.getElementById('textInput').value = x; document.getElementById('slideBar').value = x; return x" onchange="x = this.value; 
    var videoView = document.getElementsByClassName('videoviewbase')[0];
    var videoId = videoView.id.slice(14)
    var video = document.getElementById(videoId)
    var video_speed = video.getElementsByTagName('video')[0]
    var video = document.getElementById(videoId)
    var video_speed = video.getElementsByTagName('video')[0]
    video_speed.playbackRate=x;

document.getElementById('textInput').value = x; document.getElementById('slideBar').value = x; return x" style="width: 88%; display: inline-block" class="bar" name="rangeInput" min=".25" max="4" step="0.01">
</div>
`
aNode.insertAdjacentHTML('afterend', html);

