import './SliderComponent.css'

export default function SliderComponent(props) {
  return (
    <div className="Slider">
        <div className='bg-dark pt-3'>
        <div>
        {props.children}
        </div>
         <div className='d-flex mt-5 pt-2 justify-content-center align-items-end'>
         <p className='fs-1 text-primary '>.</p>
          <p className='fs-1 text-dark '>.</p>
          <p className='fs-1 text-dark '>.</p>
         </div>
        </div>
    </div>
  )
}
