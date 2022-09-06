import React, { useEffect } from 'react';
import videojs from 'video.js';

import 'video.js/dist/video-js.css';

const VideoDemo = () => {

    useEffect(() => {
        const player = videojs('myvideo', {});
        player.play();
        console.log(player, 'player');
    }, []);

    return (
        <div>
            <video id='myvideo' width="960" height="540" className="video-js vjs-default-skin" controls>
                <source src="http://106.12.211.219:8778/cg3v5jzf4i7v7bfikty/evs/record/1000022/1661428598.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220905T080027Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=gatewayak%2F20220905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=d9651000400cd393e0655a7b0dc353fcb91c570cd81399f7c05dfa291b4c6e09" type="video/mp4"></source>
            </video>
        </div>
    );
};

export default VideoDemo;
