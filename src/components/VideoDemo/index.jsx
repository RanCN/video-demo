import React, { useEffect, useState } from "react";
import videojs from "video.js";
import { Input, Button } from "antd";

import "video.js/dist/video-js.css";
import "./index.css";

const UI = () => {
    const [videoUrl, setVideoUrl] = useState();
    const [playUrl, setPlayUrl] = useState();
    const [player, setPlayer] = useState();

    useEffect(() => {
        const options = {
            controls: true,
            sources: [
                {
                    src: playUrl
                }
            ],
        };

        const player = videojs("myVideo", options, () => {
            console.log("is player");
        });
        setPlayer(player);
        console.log(playUrl, 'playUrl')
    }, []);

    const onPlay = () => {
        // player.dispose();
        setPlayUrl(videoUrl);
        // player.src = videoUrl;
        player.src(videoUrl);
        console.log(player, 'player player')
        player.play();
    };

    return (
        <div className='video-demo'>
            <div className='video-main'>
                <video
                    id='myVideo'
                    className='video-js vjs-default-skin'
                    controls
                >
                </video>
                <div className='video-action'>
                    <Input
                        {...{
                            placeholder: "请输入url",
                            value: videoUrl,
                            onChange: (e) => setVideoUrl(e.target.value),
                        }}
                    />
                    <Button onClick={onPlay}>确认</Button>
                </div>
                <div>当前URL：{playUrl}</div>
            </div>
        </div>
    );
};

export default UI;
