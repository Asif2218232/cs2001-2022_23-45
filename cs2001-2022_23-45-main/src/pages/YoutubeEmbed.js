import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId1, embedId2, embedId3, embedId4 }) => (
    <>
        <div className="video-responsive">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
        <h2>Three quick and easy ideas!</h2>
        <div className="video-responsive">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId2}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
            <h2>Upcycling vs Recycling :O</h2>
            <div className="video-responsive">
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${embedId3}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <h2>Trash to Toys!</h2>
            <div className="video-responsive">
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${embedId4}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        </div>
    </>
);

YoutubeEmbed.propTypes = {
    embedId1: PropTypes.string.isRequired,
    embedId2: PropTypes.string.isRequired,
    embedId3: PropTypes.string.isRequired
};

export default YoutubeEmbed;
