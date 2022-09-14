import { useState } from "react";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2{
        display: inline;
    }
    button{
        position: absolute;
        right: 25vw;

    }
    .contest{
        margin-top:2vh;
        text-align: center;
        display: flex;
        gap:1vw;
        width:100%;
        height:28vh;
    }
`;
function Search(){
    const result={
        contestIng:[
            {img:"https://www.thinkcontest.com/ufiles/contest/bc33eeb9f7a55470ec0e75f810358c337784a52f.jpg",name:"충북 공모전"},
            {img:"https://lh5.googleusercontent.com/UyiicmUDUzu6AGQuwXAaYXwsKMktEFw5zWJ4Hkbz-WGr07frR81UECVNfgqjTG7cc3OOjufTfLoivSdxT0IGRB6seDfldeS1D1UcEQCP0oDPOv3F_SdsjCscGut_ji3RMw=w1436",name:"충북 공모전"},
            {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjRzuQ62AVunO0HMQgqZ7FRH514q7OWu6J3g&usqp=CAU",name:"충북 공모전"},
            {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvFQUGEoJmY5f5wEEVcABBo97tKuL8p0W5jWc98AK&s",name:"충북 공모전"},
            {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZZ0qX7KHgXF1WGTSX5Xu5cRMkL8gkJBBXh8MYwQF&s",name:"충북 공모전"},
           
        ],
        toyProjectIng:[
            {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZnyAd8FF6100rh29MaJWizHf0aA7V1lheg&usqp=CAU",name:"충북 공모전"},
            {img:"https://cdn-icons-png.flaticon.com/128/2138/2138227.png",name:"충북 공모전"},
            {img:"https://cdn-icons-png.flaticon.com/128/1723/1723750.png",name:"충북 공모전"},
            {img:"https://cdn-icons-png.flaticon.com/128/2683/2683086.png",name:"충북 공모전"},
            {img:"https://cdn-icons-png.flaticon.com/128/6696/6696066.png",name:"충북 공모전"},
        ],
        contestFinish:[
            {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSdCiPSbGDI3lG0YxrwalgGRu3I1cQe9Uow&usqp=CAU",name:"충북 공모전"},
            {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrWlGXCh1MX0-MDZE5zPbkl7bCq3aj6RRYPg&usqp=CAU",name:"충북 공모전"},
            {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUAPh-1-YReOnzJKdvH4gDjmUPXEHN_Va4A&usqp=CAU",name:"충북 공모전"},
            {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBBqCWabuMTpLsBrWu6Y65aZv5omGpb-_bkA&usqp=CAU",name:"충북 공모전"},
            {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCAAHsmpk3LZA27CBupHn0zNLPdWQiTzfbQ&usqp=CAU",name:"충북 공모전"},
           
        ],
        toyProjectFinish:[
            {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymbAycmTimVZQly1NGk_oKlLp1FetlLF7zQ&usqp=CAU",name:"충북 공모전"},
            {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9wplSNgOBFqhS4yogAvQkBaNRPvEtnY5nQw&usqp=CAU",name:"충북 공모전"},
            {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLgAfP42TIT3jAKyPfWvyp5xQn2pTDxkpNQ&usqp=CAU",name:"충북 공모전"},
            {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf5oBGUUQ2MgbdGza8MiTfrgvusssTehe_kQ&usqp=CAU",name:"충북 공모전"},
            {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaUa8PzsiHP7Pdbs5V-LEt7FkoIHfPDW6vA&usqp=CAU",name:"충북 공모전"},
        ],
        
    }
      
    
    return(
        <Container>
            <div style={{width:"50vw",marginTop:"2vh"}}>
            <h2>진행중인 공모전</h2> <button>더보기</button>
            <div className="contest">
                {result.contestIng.map((item)=>{
                    return(
                        <div style={{width:"100%",height:"100%"}}>
                        <img style={{width:"100%",maxWidth:"100%",overflow:"hidden",minWidth:"100%",height:"80%",minHeight:"80%"}} src={item.img} alt="contestImg"/>
                        <div style={{justifyContent:"center",alignItems:"center"}}>
                            {item.name}
                        </div>
                        </div>

                    );
                })}    
            </div>
            </div>
            <div style={{width:"50vw",marginTop:"2vh"}}>
            <h2>열람가능 공모전 프로젝트</h2> <button>더보기</button>
            <div className="contest">
                {result.contestFinish.map((item)=>{
                    return(
                        <div style={{width:"100%",height:"100%"}}>
                        <img style={{width:"100%",maxWidth:"100%",overflow:"hidden",minWidth:"100%",height:"80%",minHeight:"80%"}} src={item.img} alt="contestImg"/>
                        <div style={{justifyContent:"center",alignItems:"center"}}>
                            {item.name}
                        </div>
                        </div>

                    );
                })}    
            </div>
            </div>
            <div style={{width:"50vw",marginTop:"2vh"}}>
            <h2>진행중인 토이 프로젝트</h2><button>더보기</button>
            <div className="contest">
                {result.toyProjectIng.map((item)=>{
                    return(
                        <div style={{width:"100%",height:"100%"}}>
                        <img style={{width:"100%",maxWidth:"100%",overflow:"hidden",minWidth:"100%",height:"80%",minHeight:"80%"}} src={item.img} alt="contestImg"/>
                        <div style={{justifyContent:"center",alignItems:"center"}}>
                            {item.name}
                        </div>
                        </div>

                    );
                })}    
            </div>
            </div>
            <div style={{width:"50vw",marginTop:"2vh"}}>
            <h2>열람가능 토이 프로젝트</h2> <button>더보기</button>
            <div className="contest">
                {result.toyProjectFinish.map((item)=>{
                    return(
                        <div style={{width:"100%",height:"100%"}}>
                        <img style={{width:"100%",maxWidth:"100%",overflow:"hidden",minWidth:"100%",height:"80%",minHeight:"80%"}} src={item.img} alt="contestImg"/>
                        <div style={{justifyContent:"center",alignItems:"center"}}>
                            {item.name}
                        </div>
                        </div>

                    );
                })}    
            </div>
            </div>
        </Container>
    )
}
export default Search;