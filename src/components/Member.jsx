

export default function Member({img,name}) {
  return (
    <div>
      <div>
        <img src={img} className="mx-auto" alt="error" width='213px' height='320px' style={{borderRadius : '10px'}} />
      </div>
      <div className="mt-4">
        <p className="fw-bold">{name}</p>
      </div>
    </div>
  )
}
