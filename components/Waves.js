import Bodymovin from 'react-bodymovin';
import * as animation from '../animations/waves2.json'

export default () => {
  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation
  }

  return (
    <div className="waves-animation">
      <img src="./static/wave-static.png"/>
      <style jsx global>{`
        .waves-animation {
          width: 100vw;
          position: absolute;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          // margin-top: 20px;
          top: 0;
          padding-top: 220px;
          overflow: hidden;
          z-index: -10;
        }
            
        .waves-animation > .react-bodymovin-container > svg {
          margin-bottom: -10px;
        }

        @media (max-width: 850px) {
          .waves-animation > .react-bodymovin-container {
            width: 170vw;
          }
        }
      `}
      </style>
    </div>
  )
}

     // / <Bodymovin options={bodymovinOptions} />

