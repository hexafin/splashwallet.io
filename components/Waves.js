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
      <Bodymovin options={bodymovinOptions} />
      <style jsx global>{`
        .waves-animation {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          margin-top: 20px;
          overflow: hidden;
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
