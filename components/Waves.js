import Bodymovin from 'react-bodymovin';
import * as animation from '../animations/waves.json'

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
        .waves-animation > .react-bodymovin-container {
          position: fixed;
          bottom: -50px;
          left: -10px;
          z-index: -10;
          width: 110vw;
        }
      `}
      </style>
    </div>
  )
}
