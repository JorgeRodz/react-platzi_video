import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { playing } = props;
  const hasPlaying = Object.keys(playing).length > 0;

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : <Redirect to="/404/" />;
};

// para obtener el objeto "playing"
const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

export default connect(mapStateToProps, null)(Player);
