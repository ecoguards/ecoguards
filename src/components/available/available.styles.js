import styled from "styled-components";


export const AvailableParent = styled.div`
    width: 100vw;
    height: 200vh;
    display: flex;
    flex-direction: column;
    background:#1A1818;

     `;

export const AvailableWrapper = styled.div`
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction: column;
     background:#1A1818;
 
    
      `;

      

    export const SummaryContainer1 = styled.section`
      width: 90%;
      height: 45%;
      display: flex;
      gap: 0.5rem;
      justify-content: space-around;
      align-items: center;
      margin-top:10rem;
      margin-left:5rem;
    `;

   

    export const Header = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    margin-left:5rem;
    

    & h2 {
        color: #fff;
        font-size:2rem;
        line-height:0.5rem;
     }

     & img {
      margin-top:1rem;
     }
       
    `;

    export const ButtonContainer = styled.div`
    display: flex;
    
    
`;
    export const Button = styled.button`
    display: flex;
    background:#DA8450;
    width:15rem;
    border: 1px solid #DA8450; 
    border-radius:5px;
    color:#ffffff;
    height:3rem;
    align-items: center;
    justify-content: center;
    margin-left:36rem;
    font-size:1rem;
    margin-top: 10rem;
    
    
    `;
    