import CardsComp from "./CardsComp"


const data = [
    {
        id : 1,
        img : '/1000_F_328878503_ZDLzKNAkiEfiRwEwgvgI6tmx55ql919Z.jpg',
        name : 'Workshop 1',
        date : '2022-01-01',
        desc : 'Workshop 1 description',
    },
    {
        id : 2,
        img : '/how-to-organise-training-workshop-for-your-team.jpg',
        name : 'Workshop 2',
        date : '2022-01-01',
        desc : 'Workshop 2 description',
    },
    {
        id : 3,
        img : '	https://aigate.me/assets/workshop2-o_r4_Kgj.jpg',
        name : 'Workshop 3',
        date : '2022-01-01',
        desc : 'Workshop 3 description',
    },
]

export default function News() {
  return (
    <div className="container p-3">
      <div className="text-center mt-5">
        <h2 className="fw-bold">Latest News</h2>
      </div>
      <div className="row mt-5">
      {data.map((data)=>{
        return(
        <div className="col-4 mb-5" key={data.id}>
            <CardsComp img={data.img}
                       name={data.name}
                       date={data.date}
                       desc={data.desc} />
        </div>
          
        )
    })}
    </div>
    </div>
  )
}
