import Bodymovin from 'react-bodymovin';
import * as animation from '../animations/checkmark.json'

export default () => {
  const bodymovinOptions = {
    loop: false,
    autoplay: true,
    prerender: true,
    animationData: animation
  }

  return (
    <div className="checkmark-animation">
      <Bodymovin options={bodymovinOptions} />
      <style jsx global>{`

        .checkmark-animation {
          position: absolute;
          right: 12px;
          top: 22px;
        }
        .checkmark-animation > .react-bodymovin-container {
          width: 20px;
        }
      `}
      </style>
    </div>
  )
}
