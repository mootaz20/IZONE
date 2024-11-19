import Member from "./Member"
import './Teams.css';


const data = [
    {
        id : 1,
        img : 'https://aigate.me/assets/member1-J7aNPm7m.jpg',
        name : 'Team member 1'
    },
    {
        id : 2,
        img : 'https://aigate.me/assets/member2-Be212WfW.jpg',
        name : 'member 2'
    },
    {
        id : 3,
        img : 'https://aigate.me/assets/member3-BY5iNmZa.jpg',
        name : 'member 3'
    },
]

export default function Teams() {
  return (
    <div className="backGround">
        <div className="container text-center pt-5 pb-5">
        <div className="text-center">
            <h2 className="fw-bold">Our Team</h2>
        </div>
        <div className="row mt-3">
            {data.map((data)=>{
                return(
                    <div className="col-md-4 col-sm-6 col-12 mt-4" key={data.id}>
                        <Member img={data.img}
                                name={data.name} />
                    </div>
                )
            })}
        </div>
    </div>
    </div>
  )
}
